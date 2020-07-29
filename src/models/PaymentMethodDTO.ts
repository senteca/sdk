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
 * @interface PaymentMethodDTO
 */
export interface PaymentMethodDTO {
    /**
     * 
     * @type {number}
     * @memberof PaymentMethodDTO
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodDTO
     */
    authority: PaymentMethodDTOAuthorityEnum;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodDTO
     */
    type: PaymentMethodDTOTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodDTO
     */
    providerType: PaymentMethodDTOProviderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodDTO
     */
    merchantKey?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodDTO
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodDTO
     */
    countryCode: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodDTO
     */
    currencyCode: string;
    /**
     * 
     * @type {object}
     * @memberof PaymentMethodDTO
     */
    providerConfig: object;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodDTO
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof PaymentMethodDTO
     */
    createdAt: number;
    /**
     * 
     * @type {number}
     * @memberof PaymentMethodDTO
     */
    updatedAt: number;
}

export function PaymentMethodDTOFromJSON(json: any): PaymentMethodDTO {
    return PaymentMethodDTOFromJSONTyped(json, false);
}

export function PaymentMethodDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'authority': json['authority'],
        'type': json['type'],
        'providerType': json['providerType'],
        'merchantKey': !exists(json, 'merchantKey') ? undefined : json['merchantKey'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'countryCode': json['countryCode'],
        'currencyCode': json['currencyCode'],
        'providerConfig': json['providerConfig'],
        'id': json['id'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function PaymentMethodDTOToJSON(value?: PaymentMethodDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'authority': value.authority,
        'type': value.type,
        'providerType': value.providerType,
        'merchantKey': value.merchantKey,
        'description': value.description,
        'countryCode': value.countryCode,
        'currencyCode': value.currencyCode,
        'providerConfig': value.providerConfig,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
    };
}

/**
* @export
* @enum {string}
*/
export enum PaymentMethodDTOAuthorityEnum {
    Platform = 'Platform',
    Merchant = 'Merchant'
}
/**
* @export
* @enum {string}
*/
export enum PaymentMethodDTOTypeEnum {
    PaymentServiceProvider = 'PaymentServiceProvider',
    CashOnDelivery = 'CashOnDelivery'
}
/**
* @export
* @enum {string}
*/
export enum PaymentMethodDTOProviderTypeEnum {
    Borica = 'Borica'
}


