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
 * @interface StoreDTO
 */
export interface StoreDTO {
    /**
     * 
     * @type {number}
     * @memberof StoreDTO
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof StoreDTO
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof StoreDTO
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof StoreDTO
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StoreDTO
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StoreDTO
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof StoreDTO
     */
    createdAt: number;
    /**
     * 
     * @type {number}
     * @memberof StoreDTO
     */
    updatedAt: number;
}

export function StoreDTOFromJSON(json: any): StoreDTO {
    return StoreDTOFromJSONTyped(json, false);
}

export function StoreDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'key': json['key'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'id': json['id'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function StoreDTOToJSON(value?: StoreDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'key': value.key,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
    };
}


