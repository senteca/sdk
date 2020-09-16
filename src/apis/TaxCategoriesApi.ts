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
    TaxCategoryDTO,
    TaxCategoryDTOFromJSON,
    TaxCategoryDTOToJSON,
    TaxCategoryDraftDTO,
    TaxCategoryDraftDTOFromJSON,
    TaxCategoryDraftDTOToJSON,
} from '../models';

export interface CreateTaxCategoryRequest {
    taxCategoryDraftDTO: TaxCategoryDraftDTO;
}

export interface DeleteTaxCategoryByIdRequest {
    id: string;
}

export interface FilterTaxCategoriesRequest {
    filter: string;
    sort: string;
    expand: string;
    project: string;
    limit?: number;
    offset?: number;
}

export interface FindTaxCategoryByIdRequest {
    id: string;
}

export interface FindTaxCategoryByKeyRequest {
    key: string;
}

export interface UpdateTaxCategoryByIdRequest {
    id: string;
    taxCategoryDraftDTO: TaxCategoryDraftDTO;
}

/**
 * 
 */
export class TaxCategoriesApi extends runtime.BaseAPI {

    /**
     * Creates a new tax category.
     */
    async createTaxCategoryRaw(requestParameters: CreateTaxCategoryRequest): Promise<runtime.ApiResponse<TaxCategoryDTO>> {
        if (requestParameters.taxCategoryDraftDTO === null || requestParameters.taxCategoryDraftDTO === undefined) {
            throw new runtime.RequiredError('taxCategoryDraftDTO','Required parameter requestParameters.taxCategoryDraftDTO was null or undefined when calling createTaxCategory.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/config/tax-categories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TaxCategoryDraftDTOToJSON(requestParameters.taxCategoryDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TaxCategoryDTOFromJSON(jsonValue));
    }

    /**
     * Creates a new tax category.
     */
    async createTaxCategory(requestParameters: CreateTaxCategoryRequest): Promise<TaxCategoryDTO> {
        const response = await this.createTaxCategoryRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a tax category by id.
     */
    async deleteTaxCategoryByIdRaw(requestParameters: DeleteTaxCategoryByIdRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteTaxCategoryById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/config/tax-categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Deletes a tax category by id.
     */
    async deleteTaxCategoryById(requestParameters: DeleteTaxCategoryByIdRequest): Promise<object> {
        const response = await this.deleteTaxCategoryByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all tax categories.
     */
    async filterTaxCategoriesRaw(requestParameters: FilterTaxCategoriesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError('filter','Required parameter requestParameters.filter was null or undefined when calling filterTaxCategories.');
        }

        if (requestParameters.sort === null || requestParameters.sort === undefined) {
            throw new runtime.RequiredError('sort','Required parameter requestParameters.sort was null or undefined when calling filterTaxCategories.');
        }

        if (requestParameters.expand === null || requestParameters.expand === undefined) {
            throw new runtime.RequiredError('expand','Required parameter requestParameters.expand was null or undefined when calling filterTaxCategories.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling filterTaxCategories.');
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

        if (requestParameters.project !== undefined) {
            queryParameters['project'] = requestParameters.project;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/config/tax-categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Lists all tax categories.
     */
    async filterTaxCategories(requestParameters: FilterTaxCategoriesRequest): Promise<void> {
        await this.filterTaxCategoriesRaw(requestParameters);
    }

    /**
     * Returns a tax category by id.
     */
    async findTaxCategoryByIdRaw(requestParameters: FindTaxCategoryByIdRequest): Promise<runtime.ApiResponse<TaxCategoryDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findTaxCategoryById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/config/tax-categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TaxCategoryDTOFromJSON(jsonValue));
    }

    /**
     * Returns a tax category by id.
     */
    async findTaxCategoryById(requestParameters: FindTaxCategoryByIdRequest): Promise<TaxCategoryDTO> {
        const response = await this.findTaxCategoryByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a tax category by key.
     */
    async findTaxCategoryByKeyRaw(requestParameters: FindTaxCategoryByKeyRequest): Promise<runtime.ApiResponse<TaxCategoryDTO>> {
        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling findTaxCategoryByKey.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/config/tax-categories/key/{key}`.replace(`{${"key"}}`, encodeURIComponent(String(requestParameters.key))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TaxCategoryDTOFromJSON(jsonValue));
    }

    /**
     * Returns a tax category by key.
     */
    async findTaxCategoryByKey(requestParameters: FindTaxCategoryByKeyRequest): Promise<TaxCategoryDTO> {
        const response = await this.findTaxCategoryByKeyRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates a tax category by id.
     */
    async updateTaxCategoryByIdRaw(requestParameters: UpdateTaxCategoryByIdRequest): Promise<runtime.ApiResponse<TaxCategoryDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateTaxCategoryById.');
        }

        if (requestParameters.taxCategoryDraftDTO === null || requestParameters.taxCategoryDraftDTO === undefined) {
            throw new runtime.RequiredError('taxCategoryDraftDTO','Required parameter requestParameters.taxCategoryDraftDTO was null or undefined when calling updateTaxCategoryById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/config/tax-categories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TaxCategoryDraftDTOToJSON(requestParameters.taxCategoryDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TaxCategoryDTOFromJSON(jsonValue));
    }

    /**
     * Updates a tax category by id.
     */
    async updateTaxCategoryById(requestParameters: UpdateTaxCategoryByIdRequest): Promise<TaxCategoryDTO> {
        const response = await this.updateTaxCategoryByIdRaw(requestParameters);
        return await response.value();
    }

}
