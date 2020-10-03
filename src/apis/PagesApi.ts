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
    PageDTO,
    PageDTOFromJSON,
    PageDTOToJSON,
    PageDraftDTO,
    PageDraftDTOFromJSON,
    PageDraftDTOToJSON,
} from '../models';

export interface CreatePageRequest {
    pageDraftDTO: PageDraftDTO;
}

export interface DeletePageByIdRequest {
    id: string;
}

export interface FilterPagesRequest {
    filter: string;
    sort: string;
    expand: string;
    project: string;
    limit?: number;
    offset?: number;
}

export interface UpdatePageRequest {
    id: string;
    pageDraftDTO: PageDraftDTO;
}

/**
 * 
 */
export class PagesApi extends runtime.BaseAPI {

    /**
     * Creates new record
     */
    async createPageRaw(requestParameters: CreatePageRequest): Promise<runtime.ApiResponse<PageDTO>> {
        if (requestParameters.pageDraftDTO === null || requestParameters.pageDraftDTO === undefined) {
            throw new runtime.RequiredError('pageDraftDTO','Required parameter requestParameters.pageDraftDTO was null or undefined when calling createPage.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cms/pages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PageDraftDTOToJSON(requestParameters.pageDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageDTOFromJSON(jsonValue));
    }

    /**
     * Creates new record
     */
    async createPage(requestParameters: CreatePageRequest): Promise<PageDTO> {
        const response = await this.createPageRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a record by id
     */
    async deletePageByIdRaw(requestParameters: DeletePageByIdRequest): Promise<runtime.ApiResponse<PageDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePageById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cms/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageDTOFromJSON(jsonValue));
    }

    /**
     * Deletes a record by id
     */
    async deletePageById(requestParameters: DeletePageByIdRequest): Promise<PageDTO> {
        const response = await this.deletePageByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Filters the collection
     */
    async filterPagesRaw(requestParameters: FilterPagesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError('filter','Required parameter requestParameters.filter was null or undefined when calling filterPages.');
        }

        if (requestParameters.sort === null || requestParameters.sort === undefined) {
            throw new runtime.RequiredError('sort','Required parameter requestParameters.sort was null or undefined when calling filterPages.');
        }

        if (requestParameters.expand === null || requestParameters.expand === undefined) {
            throw new runtime.RequiredError('expand','Required parameter requestParameters.expand was null or undefined when calling filterPages.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling filterPages.');
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
            path: `/cms/pages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Filters the collection
     */
    async filterPages(requestParameters: FilterPagesRequest): Promise<void> {
        await this.filterPagesRaw(requestParameters);
    }

    /**
     * Updates a record
     */
    async updatePageRaw(requestParameters: UpdatePageRequest): Promise<runtime.ApiResponse<PageDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updatePage.');
        }

        if (requestParameters.pageDraftDTO === null || requestParameters.pageDraftDTO === undefined) {
            throw new runtime.RequiredError('pageDraftDTO','Required parameter requestParameters.pageDraftDTO was null or undefined when calling updatePage.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cms/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PageDraftDTOToJSON(requestParameters.pageDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageDTOFromJSON(jsonValue));
    }

    /**
     * Updates a record
     */
    async updatePage(requestParameters: UpdatePageRequest): Promise<PageDTO> {
        const response = await this.updatePageRaw(requestParameters);
        return await response.value();
    }

}
