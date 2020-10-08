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
    WidgetDTO,
    WidgetDTOFromJSON,
    WidgetDTOToJSON,
    WidgetDraftDTO,
    WidgetDraftDTOFromJSON,
    WidgetDraftDTOToJSON,
} from '../models';

export interface CreateWidgetRequest {
    widgetDraftDTO: WidgetDraftDTO;
}

export interface DeleteWidgetByIdRequest {
    id: string;
}

export interface FilterWidgetsRequest {
    filter?: Array<string>;
    sort?: Array<string>;
    expand?: Array<string>;
    project?: Array<string>;
    limit?: number;
    offset?: number;
}

export interface UpdateWidgetRequest {
    id: string;
    widgetDraftDTO: WidgetDraftDTO;
}

/**
 * 
 */
export class WidgetsApi extends runtime.BaseAPI {

    /**
     * Creates new record
     */
    async createWidgetRaw(requestParameters: CreateWidgetRequest): Promise<runtime.ApiResponse<WidgetDTO>> {
        if (requestParameters.widgetDraftDTO === null || requestParameters.widgetDraftDTO === undefined) {
            throw new runtime.RequiredError('widgetDraftDTO','Required parameter requestParameters.widgetDraftDTO was null or undefined when calling createWidget.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cms/widgets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WidgetDraftDTOToJSON(requestParameters.widgetDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WidgetDTOFromJSON(jsonValue));
    }

    /**
     * Creates new record
     */
    async createWidget(requestParameters: CreateWidgetRequest): Promise<WidgetDTO> {
        const response = await this.createWidgetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a record by id
     */
    async deleteWidgetByIdRaw(requestParameters: DeleteWidgetByIdRequest): Promise<runtime.ApiResponse<WidgetDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteWidgetById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cms/widgets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WidgetDTOFromJSON(jsonValue));
    }

    /**
     * Deletes a record by id
     */
    async deleteWidgetById(requestParameters: DeleteWidgetByIdRequest): Promise<WidgetDTO> {
        const response = await this.deleteWidgetByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Filters the collection
     */
    async filterWidgetsRaw(requestParameters: FilterWidgetsRequest): Promise<runtime.ApiResponse<void>> {
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
            path: `/cms/widgets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Filters the collection
     */
    async filterWidgets(requestParameters: FilterWidgetsRequest): Promise<void> {
        await this.filterWidgetsRaw(requestParameters);
    }

    /**
     * Updates a record
     */
    async updateWidgetRaw(requestParameters: UpdateWidgetRequest): Promise<runtime.ApiResponse<WidgetDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateWidget.');
        }

        if (requestParameters.widgetDraftDTO === null || requestParameters.widgetDraftDTO === undefined) {
            throw new runtime.RequiredError('widgetDraftDTO','Required parameter requestParameters.widgetDraftDTO was null or undefined when calling updateWidget.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cms/widgets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: WidgetDraftDTOToJSON(requestParameters.widgetDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WidgetDTOFromJSON(jsonValue));
    }

    /**
     * Updates a record
     */
    async updateWidget(requestParameters: UpdateWidgetRequest): Promise<WidgetDTO> {
        const response = await this.updateWidgetRaw(requestParameters);
        return await response.value();
    }

}
