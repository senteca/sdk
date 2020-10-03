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
 * @interface PageDTO
 */
export interface PageDTO {
    /**
     * 
     * @type {number}
     * @memberof PageDTO
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof PageDTO
     */
    themeKey?: string;
    /**
     * 
     * @type {string}
     * @memberof PageDTO
     */
    viewKey?: string;
    /**
     * 
     * @type {string}
     * @memberof PageDTO
     */
    name: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof PageDTO
     */
    data: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof PageDTO
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof PageDTO
     */
    createdAt: number;
    /**
     * 
     * @type {number}
     * @memberof PageDTO
     */
    updatedAt: number;
}

export function PageDTOFromJSON(json: any): PageDTO {
    return PageDTOFromJSONTyped(json, false);
}

export function PageDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'themeKey': !exists(json, 'themeKey') ? undefined : json['themeKey'],
        'viewKey': !exists(json, 'viewKey') ? undefined : json['viewKey'],
        'name': json['name'],
        'data': json['data'],
        'id': json['_id'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function PageDTOToJSON(value?: PageDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'themeKey': value.themeKey,
        'viewKey': value.viewKey,
        'name': value.name,
        'data': value.data,
        '_id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
    };
}


