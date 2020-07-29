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


import * as runtime from '../runtime';
import {
    MerchantDTO,
    MerchantDTOFromJSON,
    MerchantDTOToJSON,
    MerchantDraftDTO,
    MerchantDraftDTOFromJSON,
    MerchantDraftDTOToJSON,
} from '../models';

export interface CreateMerchantRequest {
    merchantDraftDTO: MerchantDraftDTO;
}

export interface DeleteMerchantByIdRequest {
    id: string;
}

export interface FilterMerchantsRequest {
    filter: string;
    sort: string;
    expand: string;
    limit?: number;
    offset?: number;
}

export interface FindMerchantByIdRequest {
    id: string;
}

export interface UpdateMerchantByIdRequest {
    id: string;
    merchantDraftDTO: MerchantDraftDTO;
}

/**
 * 
 */
export class MerchantsApi extends runtime.BaseAPI {

    /**
     * Creates a new merchant.
     */
    async createMerchantRaw(requestParameters: CreateMerchantRequest): Promise<runtime.ApiResponse<MerchantDTO>> {
        if (requestParameters.merchantDraftDTO === null || requestParameters.merchantDraftDTO === undefined) {
            throw new runtime.RequiredError('merchantDraftDTO','Required parameter requestParameters.merchantDraftDTO was null or undefined when calling createMerchant.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/merchandise/merchants`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MerchantDraftDTOToJSON(requestParameters.merchantDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MerchantDTOFromJSON(jsonValue));
    }

    /**
     * Creates a new merchant.
     */
    async createMerchant(requestParameters: CreateMerchantRequest): Promise<MerchantDTO> {
        const response = await this.createMerchantRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a merchant by id.
     */
    async deleteMerchantByIdRaw(requestParameters: DeleteMerchantByIdRequest): Promise<runtime.ApiResponse<MerchantDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteMerchantById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/merchants/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MerchantDTOFromJSON(jsonValue));
    }

    /**
     * Deletes a merchant by id.
     */
    async deleteMerchantById(requestParameters: DeleteMerchantByIdRequest): Promise<MerchantDTO> {
        const response = await this.deleteMerchantByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all merchants.
     */
    async filterMerchantsRaw(requestParameters: FilterMerchantsRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError('filter','Required parameter requestParameters.filter was null or undefined when calling filterMerchants.');
        }

        if (requestParameters.sort === null || requestParameters.sort === undefined) {
            throw new runtime.RequiredError('sort','Required parameter requestParameters.sort was null or undefined when calling filterMerchants.');
        }

        if (requestParameters.expand === null || requestParameters.expand === undefined) {
            throw new runtime.RequiredError('expand','Required parameter requestParameters.expand was null or undefined when calling filterMerchants.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/merchants`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Lists all merchants.
     */
    async filterMerchants(requestParameters: FilterMerchantsRequest): Promise<void> {
        await this.filterMerchantsRaw(requestParameters);
    }

    /**
     * Returns a merchant by id.
     */
    async findMerchantByIdRaw(requestParameters: FindMerchantByIdRequest): Promise<runtime.ApiResponse<MerchantDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findMerchantById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/merchants/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MerchantDTOFromJSON(jsonValue));
    }

    /**
     * Returns a merchant by id.
     */
    async findMerchantById(requestParameters: FindMerchantByIdRequest): Promise<MerchantDTO> {
        const response = await this.findMerchantByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates a merchant by id.
     */
    async updateMerchantByIdRaw(requestParameters: UpdateMerchantByIdRequest): Promise<runtime.ApiResponse<MerchantDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateMerchantById.');
        }

        if (requestParameters.merchantDraftDTO === null || requestParameters.merchantDraftDTO === undefined) {
            throw new runtime.RequiredError('merchantDraftDTO','Required parameter requestParameters.merchantDraftDTO was null or undefined when calling updateMerchantById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/merchandise/merchants/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MerchantDraftDTOToJSON(requestParameters.merchantDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MerchantDTOFromJSON(jsonValue));
    }

    /**
     * Updates a merchant by id.
     */
    async updateMerchantById(requestParameters: UpdateMerchantByIdRequest): Promise<MerchantDTO> {
        const response = await this.updateMerchantByIdRaw(requestParameters);
        return await response.value();
    }

}
