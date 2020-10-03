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
 * @interface PageDraftDTO
 */
export interface PageDraftDTO {
    /**
     * 
     * @type {number}
     * @memberof PageDraftDTO
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof PageDraftDTO
     */
    themeKey?: string;
    /**
     * 
     * @type {string}
     * @memberof PageDraftDTO
     */
    viewKey?: string;
    /**
     * 
     * @type {string}
     * @memberof PageDraftDTO
     */
    name: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof PageDraftDTO
     */
    data: Array<object>;
}

export function PageDraftDTOFromJSON(json: any): PageDraftDTO {
    return PageDraftDTOFromJSONTyped(json, false);
}

export function PageDraftDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageDraftDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'themeKey': !exists(json, 'themeKey') ? undefined : json['themeKey'],
        'viewKey': !exists(json, 'viewKey') ? undefined : json['viewKey'],
        'name': json['name'],
        'data': json['data'],
    };
}

export function PageDraftDTOToJSON(value?: PageDraftDTO | null): any {
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
    };
}


