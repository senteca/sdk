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
    ContentDTO,
    ContentDTOFromJSON,
    ContentDTOToJSON,
    ContentDraftDTO,
    ContentDraftDTOFromJSON,
    ContentDraftDTOToJSON,
} from '../models';

export interface CreateContentRequest {
    contentDraftDTO: ContentDraftDTO;
}

export interface DeleteContentByIdRequest {
    id: string;
}

export interface FilterContentsRequest {
    filter?: Array<string>;
    sort?: Array<string>;
    expand?: Array<string>;
    project?: Array<string>;
    limit?: number;
    offset?: number;
}

export interface UpdateContentRequest {
    id: string;
    contentDraftDTO: ContentDraftDTO;
}

/**
 * 
 */
export class ContentsApi extends runtime.BaseAPI {

    /**
     * Creates new record
     */
    async createContentRaw(requestParameters: CreateContentRequest): Promise<runtime.ApiResponse<ContentDTO>> {
        if (requestParameters.contentDraftDTO === null || requestParameters.contentDraftDTO === undefined) {
            throw new runtime.RequiredError('contentDraftDTO','Required parameter requestParameters.contentDraftDTO was null or undefined when calling createContent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cms/contents`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ContentDraftDTOToJSON(requestParameters.contentDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentDTOFromJSON(jsonValue));
    }

    /**
     * Creates new record
     */
    async createContent(requestParameters: CreateContentRequest): Promise<ContentDTO> {
        const response = await this.createContentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a record by id
     */
    async deleteContentByIdRaw(requestParameters: DeleteContentByIdRequest): Promise<runtime.ApiResponse<ContentDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteContentById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cms/contents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentDTOFromJSON(jsonValue));
    }

    /**
     * Deletes a record by id
     */
    async deleteContentById(requestParameters: DeleteContentByIdRequest): Promise<ContentDTO> {
        const response = await this.deleteContentByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Filters the collection
     */
    async filterContentsRaw(requestParameters: FilterContentsRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filter) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.project) {
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
            path: `/cms/contents`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Filters the collection
     */
    async filterContents(requestParameters: FilterContentsRequest): Promise<void> {
        await this.filterContentsRaw(requestParameters);
    }

    /**
     * Updates a record
     */
    async updateContentRaw(requestParameters: UpdateContentRequest): Promise<runtime.ApiResponse<ContentDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateContent.');
        }

        if (requestParameters.contentDraftDTO === null || requestParameters.contentDraftDTO === undefined) {
            throw new runtime.RequiredError('contentDraftDTO','Required parameter requestParameters.contentDraftDTO was null or undefined when calling updateContent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cms/contents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ContentDraftDTOToJSON(requestParameters.contentDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ContentDTOFromJSON(jsonValue));
    }

    /**
     * Updates a record
     */
    async updateContent(requestParameters: UpdateContentRequest): Promise<ContentDTO> {
        const response = await this.updateContentRaw(requestParameters);
        return await response.value();
    }

}
