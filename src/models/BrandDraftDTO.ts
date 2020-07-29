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
    AssetDTO,
    AssetDTOFromJSON,
    AssetDTOFromJSONTyped,
    AssetDTOToJSON,
    IdLinkDTO,
    IdLinkDTOFromJSON,
    IdLinkDTOFromJSONTyped,
    IdLinkDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface BrandDraftDTO
 */
export interface BrandDraftDTO {
    /**
     * 
     * @type {number}
     * @memberof BrandDraftDTO
     */
    version?: number;
    /**
     * 
     * @type {object}
     * @memberof BrandDraftDTO
     */
    name: object;
    /**
     * 
     * @type {object}
     * @memberof BrandDraftDTO
     */
    description?: object;
    /**
     * 
     * @type {number}
     * @memberof BrandDraftDTO
     */
    weight: number;
    /**
     * 
     * @type {IdLinkDTO}
     * @memberof BrandDraftDTO
     */
    parent?: IdLinkDTO;
    /**
     * 
     * @type {Array<IdLinkDTO>}
     * @memberof BrandDraftDTO
     */
    ancestors?: Array<IdLinkDTO>;
    /**
     * 
     * @type {string}
     * @memberof BrandDraftDTO
     */
    status: BrandDraftDTOStatusEnum;
    /**
     * 
     * @type {Array<AssetDTO>}
     * @memberof BrandDraftDTO
     */
    assets?: Array<AssetDTO>;
    /**
     * 
     * @type {object}
     * @memberof BrandDraftDTO
     */
    slug: object;
    /**
     * 
     * @type {object}
     * @memberof BrandDraftDTO
     */
    metaTitle?: object;
    /**
     * 
     * @type {object}
     * @memberof BrandDraftDTO
     */
    metaDescription?: object;
    /**
     * 
     * @type {object}
     * @memberof BrandDraftDTO
     */
    metaKeywords?: object;
    /**
     * 
     * @type {string}
     * @memberof BrandDraftDTO
     */
    externalId?: string;
    /**
     * 
     * @type {object}
     * @memberof BrandDraftDTO
     */
    custom?: object;
}

export function BrandDraftDTOFromJSON(json: any): BrandDraftDTO {
    return BrandDraftDTOFromJSONTyped(json, false);
}

export function BrandDraftDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrandDraftDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'weight': json['weight'],
        'parent': !exists(json, 'parent') ? undefined : IdLinkDTOFromJSON(json['parent']),
        'ancestors': !exists(json, 'ancestors') ? undefined : ((json['ancestors'] as Array<any>).map(IdLinkDTOFromJSON)),
        'status': json['status'],
        'assets': !exists(json, 'assets') ? undefined : ((json['assets'] as Array<any>).map(AssetDTOFromJSON)),
        'slug': json['slug'],
        'metaTitle': !exists(json, 'metaTitle') ? undefined : json['metaTitle'],
        'metaDescription': !exists(json, 'metaDescription') ? undefined : json['metaDescription'],
        'metaKeywords': !exists(json, 'metaKeywords') ? undefined : json['metaKeywords'],
        'externalId': !exists(json, 'externalId') ? undefined : json['externalId'],
        'custom': !exists(json, 'custom') ? undefined : json['custom'],
    };
}

export function BrandDraftDTOToJSON(value?: BrandDraftDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'name': value.name,
        'description': value.description,
        'weight': value.weight,
        'parent': IdLinkDTOToJSON(value.parent),
        'ancestors': value.ancestors === undefined ? undefined : ((value.ancestors as Array<any>).map(IdLinkDTOToJSON)),
        'status': value.status,
        'assets': value.assets === undefined ? undefined : ((value.assets as Array<any>).map(AssetDTOToJSON)),
        'slug': value.slug,
        'metaTitle': value.metaTitle,
        'metaDescription': value.metaDescription,
        'metaKeywords': value.metaKeywords,
        'externalId': value.externalId,
        'custom': value.custom,
    };
}

/**
* @export
* @enum {string}
*/
export enum BrandDraftDTOStatusEnum {
    Published = 'published',
    Unpublished = 'unpublished',
    Delisted = 'delisted'
}


