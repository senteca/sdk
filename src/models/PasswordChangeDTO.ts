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
 * @interface PasswordChangeDTO
 */
export interface PasswordChangeDTO {
    /**
     * 
     * @type {string}
     * @memberof PasswordChangeDTO
     */
    currentPassword: string;
    /**
     * 
     * @type {string}
     * @memberof PasswordChangeDTO
     */
    newPassword: string;
}

export function PasswordChangeDTOFromJSON(json: any): PasswordChangeDTO {
    return PasswordChangeDTOFromJSONTyped(json, false);
}

export function PasswordChangeDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PasswordChangeDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentPassword': json['currentPassword'],
        'newPassword': json['newPassword'],
    };
}

export function PasswordChangeDTOToJSON(value?: PasswordChangeDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currentPassword': value.currentPassword,
        'newPassword': value.newPassword,
    };
}


