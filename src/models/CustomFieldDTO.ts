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
    CustomFieldValueDTO,
    CustomFieldValueDTOFromJSON,
    CustomFieldValueDTOFromJSONTyped,
    CustomFieldValueDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface CustomFieldDTO
 */
export interface CustomFieldDTO {
    /**
     * 
     * @type {string}
     * @memberof CustomFieldDTO
     */
    type: CustomFieldDTOTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldDTO
     */
    resourceTypeId: CustomFieldDTOResourceTypeIdEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldDTO
     */
    name: string;
    /**
     * 
     * @type {object}
     * @memberof CustomFieldDTO
     */
    label: object;
    /**
     * 
     * @type {boolean}
     * @memberof CustomFieldDTO
     */
    isRequired: boolean;
    /**
     * 
     * @type {object}
     * @memberof CustomFieldDTO
     */
    description: object;
    /**
     * 
     * @type {Array<CustomFieldValueDTO>}
     * @memberof CustomFieldDTO
     */
    values: Array<CustomFieldValueDTO>;
}

export function CustomFieldDTOFromJSON(json: any): CustomFieldDTO {
    return CustomFieldDTOFromJSONTyped(json, false);
}

export function CustomFieldDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomFieldDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'resourceTypeId': json['resourceTypeId'],
        'name': json['name'],
        'label': json['label'],
        'isRequired': json['isRequired'],
        'description': json['description'],
        'values': ((json['values'] as Array<any>).map(CustomFieldValueDTOFromJSON)),
    };
}

export function CustomFieldDTOToJSON(value?: CustomFieldDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'resourceTypeId': value.resourceTypeId,
        'name': value.name,
        'label': value.label,
        'isRequired': value.isRequired,
        'description': value.description,
        'values': ((value.values as Array<any>).map(CustomFieldValueDTOToJSON)),
    };
}

/**
* @export
* @enum {string}
*/
export enum CustomFieldDTOTypeEnum {
    String = 'string',
    Boolean = 'boolean',
    Number = 'number',
    Enum = 'enum',
    Array = 'array'
}
/**
* @export
* @enum {string}
*/
export enum CustomFieldDTOResourceTypeIdEnum {
    Store = 'store',
    Address = 'address',
    Brand = 'brand',
    Category = 'category',
    Collection = 'collection',
    View = 'view',
    Wallet = 'wallet',
    WalletType = 'wallet-type',
    Customer = 'customer',
    CustomerGroup = 'customer-group',
    ProductDiscount = 'product-discount',
    CartDiscount = 'cart-discount',
    DiscountCode = 'discount-code',
    Item = 'item',
    Order = 'order',
    Payment = 'payment',
    Merchant = 'merchant',
    Product = 'product',
    Shipping = 'shipping',
    TaxCategory = 'tax-category',
    PriceList = 'price-list',
    ShippingMethod = 'shipping-method',
    PaymentMethod = 'payment-method',
    State = 'state',
    CmsFolder = 'cms-folder',
    CmsType = 'cms-type'
}


