/* tslint:disable */
/* eslint-disable */
/**
 * Auth
 * Auth API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ValueTypeDraftDTO
 */
export interface ValueTypeDraftDTO {
    /**
     * 
     * @type {number}
     * @memberof ValueTypeDraftDTO
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof ValueTypeDraftDTO
     */
    name: string;
    /**
     * 
     * @type {object}
     * @memberof ValueTypeDraftDTO
     */
    dataSchema: object;
}

export function ValueTypeDraftDTOFromJSON(json: any): ValueTypeDraftDTO {
    return ValueTypeDraftDTOFromJSONTyped(json, false);
}

export function ValueTypeDraftDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValueTypeDraftDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'name': json['name'],
        'dataSchema': json['dataSchema'],
    };
}

export function ValueTypeDraftDTOToJSON(value?: ValueTypeDraftDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'name': value.name,
        'dataSchema': value.dataSchema,
    };
}


