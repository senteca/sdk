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
    DiscountPortionDTO,
    DiscountPortionDTOFromJSON,
    DiscountPortionDTOFromJSONTyped,
    DiscountPortionDTOToJSON,
    MoneyDTO,
    MoneyDTOFromJSON,
    MoneyDTOFromJSONTyped,
    MoneyDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface SubtotalDiscountDTO
 */
export interface SubtotalDiscountDTO {
    /**
     * 
     * @type {MoneyDTO}
     * @memberof SubtotalDiscountDTO
     */
    value: MoneyDTO;
    /**
     * 
     * @type {Array<DiscountPortionDTO>}
     * @memberof SubtotalDiscountDTO
     */
    includedDiscounts: Array<DiscountPortionDTO>;
}

export function SubtotalDiscountDTOFromJSON(json: any): SubtotalDiscountDTO {
    return SubtotalDiscountDTOFromJSONTyped(json, false);
}

export function SubtotalDiscountDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubtotalDiscountDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': MoneyDTOFromJSON(json['value']),
        'includedDiscounts': ((json['includedDiscounts'] as Array<any>).map(DiscountPortionDTOFromJSON)),
    };
}

export function SubtotalDiscountDTOToJSON(value?: SubtotalDiscountDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': MoneyDTOToJSON(value.value),
        'includedDiscounts': ((value.includedDiscounts as Array<any>).map(DiscountPortionDTOToJSON)),
    };
}


