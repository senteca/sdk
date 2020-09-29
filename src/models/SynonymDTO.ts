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
 * @interface SynonymDTO
 */
export interface SynonymDTO {
    /**
     * 
     * @type {number}
     * @memberof SynonymDTO
     */
    version?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof SynonymDTO
     */
    tokens: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof SynonymDTO
     */
    id: object;
    /**
     * 
     * @type {number}
     * @memberof SynonymDTO
     */
    createdAt: number;
    /**
     * 
     * @type {number}
     * @memberof SynonymDTO
     */
    updatedAt: number;
}

export function SynonymDTOFromJSON(json: any): SynonymDTO {
    return SynonymDTOFromJSONTyped(json, false);
}

export function SynonymDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SynonymDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'tokens': json['tokens'],
        'id': json['_id'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function SynonymDTOToJSON(value?: SynonymDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'tokens': value.tokens,
        '_id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
    };
}


