const { toArray } = require("../utils/array");
const { getIn } = require("../utils/data");
const { capitalize, kebabToPascal } = require("../utils/string");

module.exports = class ModelsMapper {
  static map(name, schema) {
    const relatedModels = [];
    const relatedEnums = [];
    const properties = [];

    const requiredMap = toArray(getIn(schema, "required")).reduce(
      (map, prop) => {
        map[prop] = true;
        return map;
      },
      {}
    );

    const props = getIn(schema, "properties");
    for (const prop in props) {
      const { signature, relatedModel, relatedEnum } = this.mapProp(
        prop,
        props[prop],
        requiredMap,
        name
      );

      if (relatedModel && !relatedModels.includes(relatedModel)) {
        relatedModels.push(relatedModel);
      }

      if (relatedEnum) {
        relatedEnums.push(relatedEnum);
      }

      properties.push(signature);
    }

    return {
      name,
      properties,
      relatedModels,
      relatedEnums,
    };
  }

  static mapProp(name, definition, requiredMap, prefix) {
    let relatedModel = null;
    let relatedEnum = null;

    const isRequired = requiredMap[name];
    let realType;
    if (definition.type) {
      if (definition.enum) {
        // enum
        realType = `${capitalize(prefix)}${capitalize(name)}Enum`;
        relatedEnum = {
          name: realType,
          values: definition.enum.map((value) => ({
            name: kebabToPascal(value),
            value,
          })),
        };
      } else if (definition.type === "array") {
        // array
        const mappedItem = this.mapProp(name, definition.items, {}, prefix);
        realType = `${mappedItem.realType}[]`;
        relatedModel = mappedItem.relatedModel;
        relatedEnum = mappedItem.relatedEnum;
      } else {
        // base types
        if (definition.type === "object") {
          realType = "any";
        } else {
          realType = definition.type;
        }
      }
    } else {
      if (definition.$ref) {
        // reference
        realType = definition.$ref.replace("#/components/schemas/", "");
        relatedModel = realType;
      }
    }

    const typeExpr = `: ${realType}`;
    const requiredExpr = isRequired ? "" : "?";
    let defaultExpr = "";
    // const hasDefault = definition.hasOwnProperty("default");
    // const isStr = realType === "string";
    // const isArray = definition.type === "array";
    // const isEnum = !!relatedEnum;
    // if (hasDefault) {
    //   let defaultValue = "";

    //   switch (true) {
    //     case isStr:
    //       defaultValue = `'${definition.default}'`;
    //       break;
    //     case isEnum:
    //       defaultValue = `${relatedEnum.name}.${kebabToPascal(
    //         definition.default
    //       )}`;
    //       break;
    //     case isArray:
    //       defaultValue = JSON.stringify(definition.default);
    //       break;
    //     default:
    //       defaultValue = definition.default;
    //       break;
    //   }
    //   defaultExpr = ` = ${defaultValue}`;
    // }

    const signature = `${name}${requiredExpr}${typeExpr}${defaultExpr};`;

    return { signature, realType, relatedModel, relatedEnum };
  }
};
