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
 * @interface PriceListDraftDTO
 */
export interface PriceListDraftDTO {
    /**
     * 
     * @type {number}
     * @memberof PriceListDraftDTO
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof PriceListDraftDTO
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof PriceListDraftDTO
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PriceListDraftDTO
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PriceListDraftDTO
     */
    countryCode: string;
    /**
     * 
     * @type {string}
     * @memberof PriceListDraftDTO
     */
    currencyCode: string;
    /**
     * 
     * @type {boolean}
     * @memberof PriceListDraftDTO
     */
    taxIncluded: boolean;
}

export function PriceListDraftDTOFromJSON(json: any): PriceListDraftDTO {
    return PriceListDraftDTOFromJSONTyped(json, false);
}

export function PriceListDraftDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceListDraftDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'key': json['key'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'countryCode': json['countryCode'],
        'currencyCode': json['currencyCode'],
        'taxIncluded': json['taxIncluded'],
    };
}

export function PriceListDraftDTOToJSON(value?: PriceListDraftDTO | null): any {
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
        'countryCode': value.countryCode,
        'currencyCode': value.currencyCode,
        'taxIncluded': value.taxIncluded,
    };
}


