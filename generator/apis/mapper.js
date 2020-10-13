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
    url = url.replace(/\{/g, "${"); // {id} -> ${id} to be used for sting interpolation
    const name = actionMethod.operationId; // TODO: operationId alternative ?
    const method = actionMethod.method.toUpperCase();
    const parameters = this.mapParameters(actionMethod.parameters);
    const bodyParam = this.mapRequestBody(
      actionMethod.requestBody,
      relatedModels
    );

    if (bodyParam) {
      parameters.push(bodyParam); // DTO always comes last
    }

    if (parameters.length) {
      parameters[parameters.length - 1].last = true; // needed by the template
    }

    const response = this.mapResponse(actionMethod.responses, relatedModels);

    const hasQueryParam =
      parameters.find((p) => p.text.startsWith("query:")) !== undefined;
    const hasBodyParam = !!bodyParam;

    return {
      url,
      name,
      method,
      parameters,
      response,
      hasQueryParam,
      hasBodyParam,
    };
  }

  static mapParameters(parameters) {
    const mappedParams = parameters.map((p) => ({
      target: p.in,
      name: p.name,
      required: p.required,
      type: p.schema.type == "array" ? "string[]" : p.schema.type, // quick fix - other array types available?
    }));

    const toSignature = (param) =>
      `${param.name}${param.required ? "" : "?"}: ${param.type}`;

    const pathParams = mappedParams.filter((p) => p.target === "path");
    const queryParams = mappedParams.filter((p) => p.target === "query");

    const paramSignatures = pathParams.map((x) => ({ text: toSignature(x) }));

    if (queryParams.length) {
      // anonymous type for query params:
      // query: { filter: string[]; sort?: string; }
      const queryParamSignatures = queryParams.map(toSignature);
      const querySignature = `query: { ${queryParamSignatures.join(", ")} }`;
      paramSignatures.push({ text: querySignature });
    }

    return paramSignatures;
  }

  static mapRequestBody(requestBody, relatedModels) {
    if (!requestBody || !requestBody.required) {
      return;
    }

    const schema = getIn(requestBody, "content.application/json.schema");

    const ref = getIn(schema, "$ref", "").replace("#/components/schemas/", "");
    const type = getIn(schema, "type", "");

    let requestBodyType;
    let relatedModel;

    if (type === "array") {
      const itemsRef = getIn(schema, "items.$ref", "").replace(
        "#/components/schemas/",
        ""
      );
      const itemsType = getIn(schema, "items.type", "");
      requestBodyType = `${itemsRef || itemsType}[]`;
      if (itemsRef) {
        relatedModel = itemsRef;
      }
    } else {
      requestBodyType = ref || type;
      if (ref) {
        relatedModel = ref;
      }
    }

    if (relatedModel && !relatedModels.includes(relatedModel)) {
      relatedModels.push(relatedModel);
    }

    const signature = `dto: ${requestBodyType}`;
    return { text: signature };
  }

  static mapResponse(response, relatedModels) {
    const successStatus = response["200"] || response["201"];

    const type = (
      getIn(successStatus, "content.application/json.schema.$ref") || ""
    ).replace("#/components/schemas/", "");

    if (!type) {
      return "void";
    }

    if (!relatedModels.includes(type)) {
      relatedModels.push(type);
    }

    return type;
  }
};
