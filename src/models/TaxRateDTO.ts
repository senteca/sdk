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
import {
    SubRateDTO,
    SubRateDTOFromJSON,
    SubRateDTOFromJSONTyped,
    SubRateDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface TaxRateDTO
 */
export interface TaxRateDTO {
    /**
     * 
     * @type {string}
     * @memberof TaxRateDTO
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof TaxRateDTO
     */
    totalAmount: number;
    /**
     * 
     * @type {string}
     * @memberof TaxRateDTO
     */
    countryCode: string;
    /**
     * 
     * @type {string}
     * @memberof TaxRateDTO
     */
    state?: string;
    /**
     * 
     * @type {Array<SubRateDTO>}
     * @memberof TaxRateDTO
     */
    subRates: Array<SubRateDTO>;
}

export function TaxRateDTOFromJSON(json: any): TaxRateDTO {
    return TaxRateDTOFromJSONTyped(json, false);
}

export function TaxRateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxRateDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'totalAmount': json['totalAmount'],
        'countryCode': json['countryCode'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'subRates': ((json['subRates'] as Array<any>).map(SubRateDTOFromJSON)),
    };
}

export function TaxRateDTOToJSON(value?: TaxRateDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'totalAmount': value.totalAmount,
        'countryCode': value.countryCode,
        'state': value.state,
        'subRates': ((value.subRates as Array<any>).map(SubRateDTOToJSON)),
    };
}


