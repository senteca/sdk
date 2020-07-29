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
    AssetDTO,
    AssetDTOFromJSON,
    AssetDTOToJSON,
    ViewDTO,
    ViewDTOFromJSON,
    ViewDTOToJSON,
    ViewDraftDTO,
    ViewDraftDTOFromJSON,
    ViewDraftDTOToJSON,
} from '../models';

export interface AddViewAssetRequest {
    viewId: string;
    assetDTO: AssetDTO;
}

export interface CreateViewRequest {
    viewDraftDTO: ViewDraftDTO;
}

export interface DeleteViewByIdRequest {
    id: string;
}

export interface FilterViewsRequest {
    filter: string;
    sort: string;
    expand: string;
    limit?: number;
    offset?: number;
}

export interface FindViewByIdRequest {
    id: string;
}

export interface FindViewBySlugRequest {
    language: string;
    slug: string;
}

export interface RemoveViewAssetRequest {
    viewId: string;
    assetIndex: number;
}

export interface SearchViewsRequest {
    expand: string;
    language: string;
    term: string;
    limit?: number;
    offset?: number;
}

export interface UpdateViewAssetRequest {
    viewId: string;
    assetIndex: number;
    assetDTO: AssetDTO;
}

export interface UpdateViewByIdRequest {
    id: string;
    viewDraftDTO: ViewDraftDTO;
}

/**
 * 
 */
export class ViewsApi extends runtime.BaseAPI {

    /**
     * Creates a new asset per view id.
     */
    async addViewAssetRaw(requestParameters: AddViewAssetRequest): Promise<runtime.ApiResponse<ViewDTO>> {
        if (requestParameters.viewId === null || requestParameters.viewId === undefined) {
            throw new runtime.RequiredError('viewId','Required parameter requestParameters.viewId was null or undefined when calling addViewAsset.');
        }

        if (requestParameters.assetDTO === null || requestParameters.assetDTO === undefined) {
            throw new runtime.RequiredError('assetDTO','Required parameter requestParameters.assetDTO was null or undefined when calling addViewAsset.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/merchandise/views/{viewId}/assets`.replace(`{${"viewId"}}`, encodeURIComponent(String(requestParameters.viewId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssetDTOToJSON(requestParameters.assetDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ViewDTOFromJSON(jsonValue));
    }

    /**
     * Creates a new asset per view id.
     */
    async addViewAsset(requestParameters: AddViewAssetRequest): Promise<ViewDTO> {
        const response = await this.addViewAssetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a new view.
     */
    async createViewRaw(requestParameters: CreateViewRequest): Promise<runtime.ApiResponse<ViewDTO>> {
        if (requestParameters.viewDraftDTO === null || requestParameters.viewDraftDTO === undefined) {
            throw new runtime.RequiredError('viewDraftDTO','Required parameter requestParameters.viewDraftDTO was null or undefined when calling createView.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/merchandise/views`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ViewDraftDTOToJSON(requestParameters.viewDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ViewDTOFromJSON(jsonValue));
    }

    /**
     * Creates a new view.
     */
    async createView(requestParameters: CreateViewRequest): Promise<ViewDTO> {
        const response = await this.createViewRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a view by id.
     */
    async deleteViewByIdRaw(requestParameters: DeleteViewByIdRequest): Promise<runtime.ApiResponse<ViewDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteViewById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/views/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ViewDTOFromJSON(jsonValue));
    }

    /**
     * Deletes a view by id.
     */
    async deleteViewById(requestParameters: DeleteViewByIdRequest): Promise<ViewDTO> {
        const response = await this.deleteViewByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all views.
     */
    async filterViewsRaw(requestParameters: FilterViewsRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError('filter','Required parameter requestParameters.filter was null or undefined when calling filterViews.');
        }

        if (requestParameters.sort === null || requestParameters.sort === undefined) {
            throw new runtime.RequiredError('sort','Required parameter requestParameters.sort was null or undefined when calling filterViews.');
        }

        if (requestParameters.expand === null || requestParameters.expand === undefined) {
            throw new runtime.RequiredError('expand','Required parameter requestParameters.expand was null or undefined when calling filterViews.');
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
            path: `/merchandise/views`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Lists all views.
     */
    async filterViews(requestParameters: FilterViewsRequest): Promise<void> {
        await this.filterViewsRaw(requestParameters);
    }

    /**
     * Returns a view by id.
     */
    async findViewByIdRaw(requestParameters: FindViewByIdRequest): Promise<runtime.ApiResponse<ViewDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findViewById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/views/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ViewDTOFromJSON(jsonValue));
    }

    /**
     * Returns a view by id.
     */
    async findViewById(requestParameters: FindViewByIdRequest): Promise<ViewDTO> {
        const response = await this.findViewByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a view by slug and language code.
     */
    async findViewBySlugRaw(requestParameters: FindViewBySlugRequest): Promise<runtime.ApiResponse<ViewDTO>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling findViewBySlug.');
        }

        if (requestParameters.slug === null || requestParameters.slug === undefined) {
            throw new runtime.RequiredError('slug','Required parameter requestParameters.slug was null or undefined when calling findViewBySlug.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/views/slug/{language}/{slug}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))).replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters.slug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ViewDTOFromJSON(jsonValue));
    }

    /**
     * Returns a view by slug and language code.
     */
    async findViewBySlug(requestParameters: FindViewBySlugRequest): Promise<ViewDTO> {
        const response = await this.findViewBySlugRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes an asset per view id and asset index.
     */
    async removeViewAssetRaw(requestParameters: RemoveViewAssetRequest): Promise<runtime.ApiResponse<ViewDTO>> {
        if (requestParameters.viewId === null || requestParameters.viewId === undefined) {
            throw new runtime.RequiredError('viewId','Required parameter requestParameters.viewId was null or undefined when calling removeViewAsset.');
        }

        if (requestParameters.assetIndex === null || requestParameters.assetIndex === undefined) {
            throw new runtime.RequiredError('assetIndex','Required parameter requestParameters.assetIndex was null or undefined when calling removeViewAsset.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/views/{viewId}/assets/{assetIndex}`.replace(`{${"viewId"}}`, encodeURIComponent(String(requestParameters.viewId))).replace(`{${"assetIndex"}}`, encodeURIComponent(String(requestParameters.assetIndex))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ViewDTOFromJSON(jsonValue));
    }

    /**
     * Deletes an asset per view id and asset index.
     */
    async removeViewAsset(requestParameters: RemoveViewAssetRequest): Promise<ViewDTO> {
        const response = await this.removeViewAssetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Searches views by name.
     */
    async searchViewsRaw(requestParameters: SearchViewsRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.expand === null || requestParameters.expand === undefined) {
            throw new runtime.RequiredError('expand','Required parameter requestParameters.expand was null or undefined when calling searchViews.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling searchViews.');
        }

        if (requestParameters.term === null || requestParameters.term === undefined) {
            throw new runtime.RequiredError('term','Required parameter requestParameters.term was null or undefined when calling searchViews.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.language !== undefined) {
            queryParameters['language'] = requestParameters.language;
        }

        if (requestParameters.term !== undefined) {
            queryParameters['term'] = requestParameters.term;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/views/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Searches views by name.
     */
    async searchViews(requestParameters: SearchViewsRequest): Promise<void> {
        await this.searchViewsRaw(requestParameters);
    }

    /**
     * Updates an asset per view id and asset index.
     */
    async updateViewAssetRaw(requestParameters: UpdateViewAssetRequest): Promise<runtime.ApiResponse<ViewDTO>> {
        if (requestParameters.viewId === null || requestParameters.viewId === undefined) {
            throw new runtime.RequiredError('viewId','Required parameter requestParameters.viewId was null or undefined when calling updateViewAsset.');
        }

        if (requestParameters.assetIndex === null || requestParameters.assetIndex === undefined) {
            throw new runtime.RequiredError('assetIndex','Required parameter requestParameters.assetIndex was null or undefined when calling updateViewAsset.');
        }

        if (requestParameters.assetDTO === null || requestParameters.assetDTO === undefined) {
            throw new runtime.RequiredError('assetDTO','Required parameter requestParameters.assetDTO was null or undefined when calling updateViewAsset.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/merchandise/views/{viewId}/assets/{assetIndex}`.replace(`{${"viewId"}}`, encodeURIComponent(String(requestParameters.viewId))).replace(`{${"assetIndex"}}`, encodeURIComponent(String(requestParameters.assetIndex))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AssetDTOToJSON(requestParameters.assetDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ViewDTOFromJSON(jsonValue));
    }

    /**
     * Updates an asset per view id and asset index.
     */
    async updateViewAsset(requestParameters: UpdateViewAssetRequest): Promise<ViewDTO> {
        const response = await this.updateViewAssetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates a view by id.
     */
    async updateViewByIdRaw(requestParameters: UpdateViewByIdRequest): Promise<runtime.ApiResponse<ViewDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateViewById.');
        }

        if (requestParameters.viewDraftDTO === null || requestParameters.viewDraftDTO === undefined) {
            throw new runtime.RequiredError('viewDraftDTO','Required parameter requestParameters.viewDraftDTO was null or undefined when calling updateViewById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/merchandise/views/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ViewDraftDTOToJSON(requestParameters.viewDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ViewDTOFromJSON(jsonValue));
    }

    /**
     * Updates a view by id.
     */
    async updateViewById(requestParameters: UpdateViewByIdRequest): Promise<ViewDTO> {
        const response = await this.updateViewByIdRaw(requestParameters);
        return await response.value();
    }

}
