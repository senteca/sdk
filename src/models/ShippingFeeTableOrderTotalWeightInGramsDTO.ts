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
    MoneyDTO,
    MoneyDTOFromJSON,
    MoneyDTOFromJSONTyped,
    MoneyDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface ShippingFeeTableOrderTotalWeightInGramsDTO
 */
export interface ShippingFeeTableOrderTotalWeightInGramsDTO {
    /**
     * 
     * @type {number}
     * @memberof ShippingFeeTableOrderTotalWeightInGramsDTO
     */
    weightLessThan: number;
    /**
     * 
     * @type {MoneyDTO}
     * @memberof ShippingFeeTableOrderTotalWeightInGramsDTO
     */
    fee: MoneyDTO;
}

export function ShippingFeeTableOrderTotalWeightInGramsDTOFromJSON(json: any): ShippingFeeTableOrderTotalWeightInGramsDTO {
    return ShippingFeeTableOrderTotalWeightInGramsDTOFromJSONTyped(json, false);
}

export function ShippingFeeTableOrderTotalWeightInGramsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingFeeTableOrderTotalWeightInGramsDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'weightLessThan': json['weightLessThan'],
        'fee': MoneyDTOFromJSON(json['fee']),
    };
}

export function ShippingFeeTableOrderTotalWeightInGramsDTOToJSON(value?: ShippingFeeTableOrderTotalWeightInGramsDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'weightLessThan': value.weightLessThan,
        'fee': MoneyDTOToJSON(value.fee),
    };
}


