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
    DiscountedLineItemPriceDTO,
    DiscountedLineItemPriceDTOFromJSON,
    DiscountedLineItemPriceDTOFromJSONTyped,
    DiscountedLineItemPriceDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface DiscountedLineItemPriceForQuantity
 */
export interface DiscountedLineItemPriceForQuantity {
    /**
     * 
     * @type {number}
     * @memberof DiscountedLineItemPriceForQuantity
     */
    quantity: number;
    /**
     * 
     * @type {DiscountedLineItemPriceDTO}
     * @memberof DiscountedLineItemPriceForQuantity
     */
    discountedPrice: DiscountedLineItemPriceDTO;
}

export function DiscountedLineItemPriceForQuantityFromJSON(json: any): DiscountedLineItemPriceForQuantity {
    return DiscountedLineItemPriceForQuantityFromJSONTyped(json, false);
}

export function DiscountedLineItemPriceForQuantityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscountedLineItemPriceForQuantity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quantity': json['quantity'],
        'discountedPrice': DiscountedLineItemPriceDTOFromJSON(json['discountedPrice']),
    };
}

export function DiscountedLineItemPriceForQuantityToJSON(value?: DiscountedLineItemPriceForQuantity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quantity': value.quantity,
        'discountedPrice': DiscountedLineItemPriceDTOToJSON(value.discountedPrice),
    };
}


