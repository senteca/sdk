const { getIn } = require("../utils/data");
const { kebabToPascal } = require("../utils/string");

module.exports = class ApiMapper {
  static map(api) {
    const name = `${kebabToPascal(api.key)}API`;
    const methods = [];
    const relatedModels = [];

    api.actions.forEach((action) => {
      action.methods.forEach((method) => {
        methods.push(this.mapActionMethod(method, action.url, relatedModels));
      });
    });

    return {
      name,
      methods,
      relatedModels,
    };
  }

  static mapActionMethod(actionMethod, url, relatedModels) {
    const name = actionMethod.operationId; // TODO: operationId alternative ?
    const method = actionMethod.method.toUpperCase();
    const parameters = this.mapParameters(actionMethod.parameters);
    const bodyParam = this.mapRequestBody(
      actionMethod.requestBody,
      relatedModels
    );

    if (bodyParam) {
      parameters.push(bodyParam); // DTO always comes last
    } else if (parameters.length) {
      parameters[parameters.length - 1].last = true;
    }

    const response = this.mapResponse(actionMethod.responses, relatedModels);

    // TODO : group query and path params, refine schema
    const queryParams = [];
    const pathParams = [];

    return {
      url,
      name,
      method,
      parameters,
      response,
      queryParams,
      pathParams,
      hasBody: !!bodyParam,
    };
  }

  static mapParameters(parameters) {
    return parameters.map((p) => ({
      target: p.in,
      name: p.name,
      required: p.required,
      type: p.schema.type == "array" ? "string[]" : p.schema.type, // quick fix - other array types available?
    }));
  }

  static mapRequestBody(requestBody, relatedModels) {
    if (!requestBody || !requestBody.required) {
      return;
    }

    const schema = getIn(requestBody, "content.application/json.schema");

    // TODO: super messy
    const ref = getIn(schema, "$ref");
    const itemsRef = getIn(schema, "items.$ref");
    const type = getIn(schema, "type");
    const itemsType = getIn(schema, "items.type");

    const requestBodyType =
      (ref || itemsRef || "").replace("#/components/schemas/", "") ||
      type ||
      itemsType;

    if (!relatedModels.includes(requestBodyType)) {
      relatedModels.push(requestBodyType);
    }

    return {
      target: "body",
      name: "dto",
      type: requestBodyType,
      last: true,
    };
  }

  static mapResponse(response, relatedModels) {
    const successStatus = response["200"] || response["201"];

    const type = (
      getIn(successStatus, "content.application/json.schema.$ref") || "void"
    ).replace("#/components/schemas/", "");

    if (type !== "void" && !relatedModels.includes(type)) {
      relatedModels.push(type);
    }

    return type;
  }
};
