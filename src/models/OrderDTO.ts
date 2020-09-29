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
    AddressDTO,
    AddressDTOFromJSON,
    AddressDTOFromJSONTyped,
    AddressDTOToJSON,
    DiscountCodeInfoDTO,
    DiscountCodeInfoDTOFromJSON,
    DiscountCodeInfoDTOFromJSONTyped,
    DiscountCodeInfoDTOToJSON,
    IdReferenceDTO,
    IdReferenceDTOFromJSON,
    IdReferenceDTOFromJSONTyped,
    IdReferenceDTOToJSON,
    KeyReferenceDTO,
    KeyReferenceDTOFromJSON,
    KeyReferenceDTOFromJSONTyped,
    KeyReferenceDTOToJSON,
    LineItemDTO,
    LineItemDTOFromJSON,
    LineItemDTOFromJSONTyped,
    LineItemDTOToJSON,
    MerchantMethodDTO,
    MerchantMethodDTOFromJSON,
    MerchantMethodDTOFromJSONTyped,
    MerchantMethodDTOToJSON,
    MerchantPriceDTO,
    MerchantPriceDTOFromJSON,
    MerchantPriceDTOFromJSONTyped,
    MerchantPriceDTOToJSON,
    MerchantTaxedPriceDTO,
    MerchantTaxedPriceDTOFromJSON,
    MerchantTaxedPriceDTOFromJSONTyped,
    MerchantTaxedPriceDTOToJSON,
    MerchantWeightDTO,
    MerchantWeightDTOFromJSON,
    MerchantWeightDTOFromJSONTyped,
    MerchantWeightDTOToJSON,
    MoneyDTO,
    MoneyDTOFromJSON,
    MoneyDTOFromJSONTyped,
    MoneyDTOToJSON,
    OrderWalletDTO,
    OrderWalletDTOFromJSON,
    OrderWalletDTOFromJSONTyped,
    OrderWalletDTOToJSON,
    ShippingDTO,
    ShippingDTOFromJSON,
    ShippingDTOFromJSONTyped,
    ShippingDTOToJSON,
    SubtotalDiscountDTO,
    SubtotalDiscountDTOFromJSON,
    SubtotalDiscountDTOFromJSONTyped,
    SubtotalDiscountDTOToJSON,
    TaxedPriceDTO,
    TaxedPriceDTOFromJSON,
    TaxedPriceDTOFromJSONTyped,
    TaxedPriceDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrderDTO
 */
export interface OrderDTO {
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof OrderDTO
     */
    createdAt: number;
    /**
     * 
     * @type {number}
     * @memberof OrderDTO
     */
    updatedAt: number;
    /**
     * 
     * @type {number}
     * @memberof OrderDTO
     */
    version: number;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    status: OrderDTOStatusEnum;
    /**
     * 
     * @type {KeyReferenceDTO}
     * @memberof OrderDTO
     */
    state?: KeyReferenceDTO;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    countryCode: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    currencyCode: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDTO
     */
    taxIncluded: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    languageCode?: string;
    /**
     * 
     * @type {KeyReferenceDTO}
     * @memberof OrderDTO
     */
    priceList: KeyReferenceDTO;
    /**
     * 
     * @type {number}
     * @memberof OrderDTO
     */
    orderNumber: number;
    /**
     * 
     * @type {KeyReferenceDTO}
     * @memberof OrderDTO
     */
    store: KeyReferenceDTO;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    taxRoundingMode?: OrderDTOTaxRoundingModeEnum;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    taxCalculationMode?: OrderDTOTaxCalculationModeEnum;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    inventoryMode?: OrderDTOInventoryModeEnum;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    draftInventoryMode?: OrderDTODraftInventoryModeEnum;
    /**
     * 
     * @type {number}
     * @memberof OrderDTO
     */
    deleteDaysAfterDraftLastModification?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    customerId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    customerFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    customerLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    customerFullName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    customerPhone?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    customerEmail?: string;
    /**
     * 
     * @type {KeyReferenceDTO}
     * @memberof OrderDTO
     */
    customerGroup?: KeyReferenceDTO;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    anonymousId?: string;
    /**
     * 
     * @type {AddressDTO}
     * @memberof OrderDTO
     */
    shippingAddress: AddressDTO;
    /**
     * 
     * @type {AddressDTO}
     * @memberof OrderDTO
     */
    billingAddress: AddressDTO;
    /**
     * 
     * @type {Array<AddressDTO>}
     * @memberof OrderDTO
     */
    itemShippingAddresses?: Array<AddressDTO>;
    /**
     * 
     * @type {Array<LineItemDTO>}
     * @memberof OrderDTO
     */
    lineItems: Array<LineItemDTO>;
    /**
     * 
     * @type {number}
     * @memberof OrderDTO
     */
    lineItemsCount: number;
    /**
     * 
     * @type {Array<KeyReferenceDTO>}
     * @memberof OrderDTO
     */
    merchants?: Array<KeyReferenceDTO>;
    /**
     * 
     * @type {Array<MerchantPriceDTO>}
     * @memberof OrderDTO
     */
    merchantsTotalPrices: Array<MerchantPriceDTO>;
    /**
     * 
     * @type {MoneyDTO}
     * @memberof OrderDTO
     */
    grandTotalPrice: MoneyDTO;
    /**
     * 
     * @type {Array<MerchantTaxedPriceDTO>}
     * @memberof OrderDTO
     */
    merchantsTaxedPrices: Array<MerchantTaxedPriceDTO>;
    /**
     * 
     * @type {TaxedPriceDTO}
     * @memberof OrderDTO
     */
    grandTaxedPrice?: TaxedPriceDTO;
    /**
     * 
     * @type {Array<MerchantWeightDTO>}
     * @memberof OrderDTO
     */
    merchantTotalWeights: Array<MerchantWeightDTO>;
    /**
     * 
     * @type {number}
     * @memberof OrderDTO
     */
    totalWeightInGrams: number;
    /**
     * 
     * @type {Array<DiscountCodeInfoDTO>}
     * @memberof OrderDTO
     */
    discountCodes: Array<DiscountCodeInfoDTO>;
    /**
     * 
     * @type {MoneyDTO}
     * @memberof OrderDTO
     */
    subtotal?: MoneyDTO;
    /**
     * 
     * @type {SubtotalDiscountDTO}
     * @memberof OrderDTO
     */
    discountedSubtotal?: SubtotalDiscountDTO;
    /**
     * 
     * @type {OrderWalletDTO}
     * @memberof OrderDTO
     */
    wallet?: OrderWalletDTO;
    /**
     * 
     * @type {Array<object>}
     * @memberof OrderDTO
     */
    payments: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    paymentsAuthority?: OrderDTOPaymentsAuthorityEnum;
    /**
     * 
     * @type {Array<MerchantMethodDTO>}
     * @memberof OrderDTO
     */
    merchantPaymentMethods?: Array<MerchantMethodDTO>;
    /**
     * 
     * @type {IdReferenceDTO}
     * @memberof OrderDTO
     */
    platformPaymentMethod?: IdReferenceDTO;
    /**
     * 
     * @type {Array<ShippingDTO>}
     * @memberof OrderDTO
     */
    shippings: Array<ShippingDTO>;
    /**
     * 
     * @type {string}
     * @memberof OrderDTO
     */
    shippingsAuthority?: OrderDTOShippingsAuthorityEnum;
    /**
     * 
     * @type {Array<MerchantMethodDTO>}
     * @memberof OrderDTO
     */
    merchantShippingMethods?: Array<MerchantMethodDTO>;
    /**
     * 
     * @type {IdReferenceDTO}
     * @memberof OrderDTO
     */
    platformShippingMethod?: IdReferenceDTO;
    /**
     * 
     * @type {object}
     * @memberof OrderDTO
     */
    custom?: object;
}

export function OrderDTOFromJSON(json: any): OrderDTO {
    return OrderDTOFromJSONTyped(json, false);
}

export function OrderDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
        'version': json['version'],
        'status': json['status'],
        'state': !exists(json, 'state') ? undefined : KeyReferenceDTOFromJSON(json['state']),
        'note': !exists(json, 'note') ? undefined : json['note'],
        'countryCode': json['countryCode'],
        'currencyCode': json['currencyCode'],
        'taxIncluded': json['taxIncluded'],
        'languageCode': !exists(json, 'languageCode') ? undefined : json['languageCode'],
        'priceList': KeyReferenceDTOFromJSON(json['priceList']),
        'orderNumber': json['orderNumber'],
        'store': KeyReferenceDTOFromJSON(json['store']),
        'taxRoundingMode': !exists(json, 'taxRoundingMode') ? undefined : json['taxRoundingMode'],
        'taxCalculationMode': !exists(json, 'taxCalculationMode') ? undefined : json['taxCalculationMode'],
        'inventoryMode': !exists(json, 'inventoryMode') ? undefined : json['inventoryMode'],
        'draftInventoryMode': !exists(json, 'draftInventoryMode') ? undefined : json['draftInventoryMode'],
        'deleteDaysAfterDraftLastModification': !exists(json, 'deleteDaysAfterDraftLastModification') ? undefined : json['deleteDaysAfterDraftLastModification'],
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'customerFirstName': !exists(json, 'customerFirstName') ? undefined : json['customerFirstName'],
        'customerLastName': !exists(json, 'customerLastName') ? undefined : json['customerLastName'],
        'customerFullName': !exists(json, 'customerFullName') ? undefined : json['customerFullName'],
        'customerPhone': !exists(json, 'customerPhone') ? undefined : json['customerPhone'],
        'customerEmail': !exists(json, 'customerEmail') ? undefined : json['customerEmail'],
        'customerGroup': !exists(json, 'customerGroup') ? undefined : KeyReferenceDTOFromJSON(json['customerGroup']),
        'anonymousId': !exists(json, 'anonymousId') ? undefined : json['anonymousId'],
        'shippingAddress': AddressDTOFromJSON(json['shippingAddress']),
        'billingAddress': AddressDTOFromJSON(json['billingAddress']),
        'itemShippingAddresses': !exists(json, 'itemShippingAddresses') ? undefined : ((json['itemShippingAddresses'] as Array<any>).map(AddressDTOFromJSON)),
        'lineItems': ((json['lineItems'] as Array<any>).map(LineItemDTOFromJSON)),
        'lineItemsCount': json['lineItemsCount'],
        'merchants': !exists(json, 'merchants') ? undefined : ((json['merchants'] as Array<any>).map(KeyReferenceDTOFromJSON)),
        'merchantsTotalPrices': ((json['merchantsTotalPrices'] as Array<any>).map(MerchantPriceDTOFromJSON)),
        'grandTotalPrice': MoneyDTOFromJSON(json['grandTotalPrice']),
        'merchantsTaxedPrices': ((json['merchantsTaxedPrices'] as Array<any>).map(MerchantTaxedPriceDTOFromJSON)),
        'grandTaxedPrice': !exists(json, 'grandTaxedPrice') ? undefined : TaxedPriceDTOFromJSON(json['grandTaxedPrice']),
        'merchantTotalWeights': ((json['merchantTotalWeights'] as Array<any>).map(MerchantWeightDTOFromJSON)),
        'totalWeightInGrams': json['totalWeightInGrams'],
        'discountCodes': ((json['discountCodes'] as Array<any>).map(DiscountCodeInfoDTOFromJSON)),
        'subtotal': !exists(json, 'subtotal') ? undefined : MoneyDTOFromJSON(json['subtotal']),
        'discountedSubtotal': !exists(json, 'discountedSubtotal') ? undefined : SubtotalDiscountDTOFromJSON(json['discountedSubtotal']),
        'wallet': !exists(json, 'wallet') ? undefined : OrderWalletDTOFromJSON(json['wallet']),
        'payments': json['payments'],
        'paymentsAuthority': !exists(json, 'paymentsAuthority') ? undefined : json['paymentsAuthority'],
        'merchantPaymentMethods': !exists(json, 'merchantPaymentMethods') ? undefined : ((json['merchantPaymentMethods'] as Array<any>).map(MerchantMethodDTOFromJSON)),
        'platformPaymentMethod': !exists(json, 'platformPaymentMethod') ? undefined : IdReferenceDTOFromJSON(json['platformPaymentMethod']),
        'shippings': ((json['shippings'] as Array<any>).map(ShippingDTOFromJSON)),
        'shippingsAuthority': !exists(json, 'shippingsAuthority') ? undefined : json['shippingsAuthority'],
        'merchantShippingMethods': !exists(json, 'merchantShippingMethods') ? undefined : ((json['merchantShippingMethods'] as Array<any>).map(MerchantMethodDTOFromJSON)),
        'platformShippingMethod': !exists(json, 'platformShippingMethod') ? undefined : IdReferenceDTOFromJSON(json['platformShippingMethod']),
        'custom': !exists(json, 'custom') ? undefined : json['custom'],
    };
}

export function OrderDTOToJSON(value?: OrderDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'version': value.version,
        'status': value.status,
        'state': KeyReferenceDTOToJSON(value.state),
        'note': value.note,
        'countryCode': value.countryCode,
        'currencyCode': value.currencyCode,
        'taxIncluded': value.taxIncluded,
        'languageCode': value.languageCode,
        'priceList': KeyReferenceDTOToJSON(value.priceList),
        'orderNumber': value.orderNumber,
        'store': KeyReferenceDTOToJSON(value.store),
        'taxRoundingMode': value.taxRoundingMode,
        'taxCalculationMode': value.taxCalculationMode,
        'inventoryMode': value.inventoryMode,
        'draftInventoryMode': value.draftInventoryMode,
        'deleteDaysAfterDraftLastModification': value.deleteDaysAfterDraftLastModification,
        'customerId': value.customerId,
        'customerFirstName': value.customerFirstName,
        'customerLastName': value.customerLastName,
        'customerFullName': value.customerFullName,
        'customerPhone': value.customerPhone,
        'customerEmail': value.customerEmail,
        'customerGroup': KeyReferenceDTOToJSON(value.customerGroup),
        'anonymousId': value.anonymousId,
        'shippingAddress': AddressDTOToJSON(value.shippingAddress),
        'billingAddress': AddressDTOToJSON(value.billingAddress),
        'itemShippingAddresses': value.itemShippingAddresses === undefined ? undefined : ((value.itemShippingAddresses as Array<any>).map(AddressDTOToJSON)),
        'lineItems': ((value.lineItems as Array<any>).map(LineItemDTOToJSON)),
        'lineItemsCount': value.lineItemsCount,
        'merchants': value.merchants === undefined ? undefined : ((value.merchants as Array<any>).map(KeyReferenceDTOToJSON)),
        'merchantsTotalPrices': ((value.merchantsTotalPrices as Array<any>).map(MerchantPriceDTOToJSON)),
        'grandTotalPrice': MoneyDTOToJSON(value.grandTotalPrice),
        'merchantsTaxedPrices': ((value.merchantsTaxedPrices as Array<any>).map(MerchantTaxedPriceDTOToJSON)),
        'grandTaxedPrice': TaxedPriceDTOToJSON(value.grandTaxedPrice),
        'merchantTotalWeights': ((value.merchantTotalWeights as Array<any>).map(MerchantWeightDTOToJSON)),
        'totalWeightInGrams': value.totalWeightInGrams,
        'discountCodes': ((value.discountCodes as Array<any>).map(DiscountCodeInfoDTOToJSON)),
        'subtotal': MoneyDTOToJSON(value.subtotal),
        'discountedSubtotal': SubtotalDiscountDTOToJSON(value.discountedSubtotal),
        'wallet': OrderWalletDTOToJSON(value.wallet),
        'payments': value.payments,
        'paymentsAuthority': value.paymentsAuthority,
        'merchantPaymentMethods': value.merchantPaymentMethods === undefined ? undefined : ((value.merchantPaymentMethods as Array<any>).map(MerchantMethodDTOToJSON)),
        'platformPaymentMethod': IdReferenceDTOToJSON(value.platformPaymentMethod),
        'shippings': ((value.shippings as Array<any>).map(ShippingDTOToJSON)),
        'shippingsAuthority': value.shippingsAuthority,
        'merchantShippingMethods': value.merchantShippingMethods === undefined ? undefined : ((value.merchantShippingMethods as Array<any>).map(MerchantMethodDTOToJSON)),
        'platformShippingMethod': IdReferenceDTOToJSON(value.platformShippingMethod),
        'custom': value.custom,
    };
}

/**
* @export
* @enum {string}
*/
export enum OrderDTOStatusEnum {
    Draft = 'Draft',
    Open = 'Open',
    Confirmed = 'Confirmed',
    Complete = 'Complete',
    Cancelled = 'Cancelled'
}
/**
* @export
* @enum {string}
*/
export enum OrderDTOTaxRoundingModeEnum {
    HalfEven = 'HalfEven',
    HalfUp = 'HalfUp',
    HalfDown = 'HalfDown'
}
/**
* @export
* @enum {string}
*/
export enum OrderDTOTaxCalculationModeEnum {
    LineItemLevel = 'LineItemLevel',
    UnitPriceLevel = 'UnitPriceLevel'
}
/**
* @export
* @enum {string}
*/
export enum OrderDTOInventoryModeEnum {
    TrackOnly = 'TrackOnly',
    ReserveOnOrder = 'ReserveOnOrder',
    None = 'None'
}
/**
* @export
* @enum {string}
*/
export enum OrderDTODraftInventoryModeEnum {
    TrackOnly = 'TrackOnly',
    ReserveOnOrder = 'ReserveOnOrder',
    None = 'None'
}
/**
* @export
* @enum {string}
*/
export enum OrderDTOPaymentsAuthorityEnum {
    Platform = 'Platform',
    Merchant = 'Merchant'
}
/**
* @export
* @enum {string}
*/
export enum OrderDTOShippingsAuthorityEnum {
    Platform = 'Platform',
    Merchant = 'Merchant'
}


