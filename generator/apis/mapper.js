const { getIn } = require('../utils/data');
const { anyToPascal } = require('../utils/string');

module.exports = class ApiMapper {
  static map(api) {
    const name = `${anyToPascal(api.key)}API`;
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
    url = url.replace(/\{([^}]+)}/g, '${encodeURIComponent($1)}'); // {key} -> ${encodeURIComponent(key)} to be used for sting interpolation
    const name = actionMethod.operationId; // TODO: operationId alternative ?
    const method = actionMethod.method.toUpperCase();
    const authMethods = this.mapAuth(actionMethod.security);
    const bodyParam = this.mapRequestBody(
      actionMethod.requestBody,
      relatedModels,
    );
    const parameters = this.mapParameters(actionMethod.parameters, !!bodyParam);

    while (authMethods.length) parameters.unshift(authMethods.shift()); // auth methods always come first

    if (bodyParam) {
      parameters.push(bodyParam); // DTO always comes last
    }

    if (parameters.length) {
      parameters[parameters.length - 1].last = true; // needed by the template
    }

    const response = this.mapResponse(actionMethod.responses, relatedModels);
    const contentType = Object.keys(
      getIn(actionMethod, 'requestBody.content') || {},
    )[0];
    const hasContentType = contentType !== undefined;
    const hasBasicAuth = parameters.some((m) => m.text.startsWith('basicAuth'));
    const hasQueryParam = parameters.some((p) => /^query\??\:/.test(p.text));
    const hasBodyParam = !!bodyParam;
    const isNotVoid = response !== 'void';

    return {
      url,
      name,
      method,
      contentType,
      parameters,
      response,
      hasContentType,
      hasBasicAuth,
      hasQueryParam,
      hasBodyParam,
      isNotVoid,
    };
  }

  static mapAuth(security) {
    if (!security) {
      return [];
    }

    const authMethods = security
      .map((auth) => {
        if (auth.hasOwnProperty('basic')) {
          return { text: `basicAuth: { username: string, password: string }` };
        }
      })
      .filter((x) => x);

    return authMethods;
  }

  static mapParameters(parameters, hasBody) {
    const mappedParams = parameters.map((p) => ({
      target: p.in,
      name: p.name,
      required: p.required,
      type: p.schema.type == 'array' ? 'string[]' : p.schema.type, // quick fix - other array types available?
    }));

    const toSignature = (param) =>
      `${param.name}${param.required ? '' : '?'}: ${param.type}`;

    const pathParams = mappedParams.filter((p) => p.target === 'path');
    const queryParams = mappedParams.filter((p) => p.target === 'query');

    const paramSignatures = pathParams.map((x) => ({ text: toSignature(x) }));

    if (queryParams.length) {
      // anonymous type for query params:
      // query: { filter: string[]; sort?: string; }
      const isRequired =
        queryParams.filter((p) => p.name).some((p) => p.required) || hasBody;
      const queryParamSignatures = queryParams
        .filter((p) => p.name)
        .map(toSignature);
      const queryType =
        queryParamSignatures.length > 0
          ? `{ ${queryParamSignatures.join(', ')} }`
          : 'any';

      const querySignature = `query${isRequired ? '' : '?'}: ${queryType}`;
      paramSignatures.push({ text: querySignature });
    }

    return paramSignatures;
  }

  static mapRequestBody(requestBody, relatedModels) {
    if (!requestBody || !requestBody.required) {
      return;
    }

    const content = getIn(requestBody, 'content');
    const contentType = Object.keys(content)[0];
    const schema = getIn(content, `${contentType}.schema`);
    const { realType, relatedModel } = this.schemaToType(schema);

    if (relatedModel && !relatedModels.includes(relatedModel)) {
      relatedModels.push(relatedModel);
    }

    const signature = `dto: ${realType}`;
    return { text: signature };
  }

  static mapResponse(response, relatedModels) {
    const successStatus = response['200'] || response['201'];
    const content = getIn(successStatus, 'content');
    if (!content) {
      return 'void';
    }
    const schema = getIn(content, `${Object.keys(content)[0]}.schema`);
    const { realType, relatedModel } = this.schemaToType(schema);

    if (relatedModel && !relatedModels.includes(relatedModel)) {
      relatedModels.push(relatedModel);
    }

    return realType;
  }

  static schemaToType(schema) {
    const ref = getIn(schema, '$ref', '').replace('#/components/schemas/', '');
    const type = getIn(schema, 'type', '');

    let realType = '';
    let relatedModel = '';

    if (type === 'array') {
      const itemsRef = getIn(schema, 'items.$ref', '').replace(
        '#/components/schemas/',
        '',
      );
      const itemsType = getIn(schema, 'items.type', '');
      realType = `${itemsRef || itemsType}[]`;
      if (itemsRef) {
        relatedModel = itemsRef;
      }
    } else {
      realType = ref || type;
      if (ref) {
        relatedModel = ref;
      }
    }

    if (!realType) {
      realType = 'void';
    }

    if (realType.toLowerCase() === 'object') {
      realType = 'any';
      relatedModel = undefined;
    }

    return { realType, relatedModel };
  }
};
