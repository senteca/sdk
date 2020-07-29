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
    ItemShippingDetailsDraftDTO,
    ItemShippingDetailsDraftDTOFromJSON,
    ItemShippingDetailsDraftDTOFromJSONTyped,
    ItemShippingDetailsDraftDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface LineItemDraftDTO
 */
export interface LineItemDraftDTO {
    /**
     * 
     * @type {string}
     * @memberof LineItemDraftDTO
     */
    productId: string;
    /**
     * 
     * @type {string}
     * @memberof LineItemDraftDTO
     */
    variantId: string;
    /**
     * 
     * @type {string}
     * @memberof LineItemDraftDTO
     */
    merchantKey: string;
    /**
     * 
     * @type {number}
     * @memberof LineItemDraftDTO
     */
    quantity: number;
    /**
     * 
     * @type {ItemShippingDetailsDraftDTO}
     * @memberof LineItemDraftDTO
     */
    shippingDetails?: ItemShippingDetailsDraftDTO;
}

export function LineItemDraftDTOFromJSON(json: any): LineItemDraftDTO {
    return LineItemDraftDTOFromJSONTyped(json, false);
}

export function LineItemDraftDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemDraftDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productId': json['productId'],
        'variantId': json['variantId'],
        'merchantKey': json['merchantKey'],
        'quantity': json['quantity'],
        'shippingDetails': !exists(json, 'shippingDetails') ? undefined : ItemShippingDetailsDraftDTOFromJSON(json['shippingDetails']),
    };
}

export function LineItemDraftDTOToJSON(value?: LineItemDraftDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productId': value.productId,
        'variantId': value.variantId,
        'merchantKey': value.merchantKey,
        'quantity': value.quantity,
        'shippingDetails': ItemShippingDetailsDraftDTOToJSON(value.shippingDetails),
    };
}


