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
    WidgetTemplateDTO,
    WidgetTemplateDTOFromJSON,
    WidgetTemplateDTOToJSON,
    WidgetTemplateDraftDTO,
    WidgetTemplateDraftDTOFromJSON,
    WidgetTemplateDraftDTOToJSON,
} from '../models';

export interface CreateWidgetTemplateRequest {
    widgetTemplateDraftDTO: WidgetTemplateDraftDTO;
}

export interface DeleteWidgetTemplateByIdRequest {
    id: string;
}

export interface FilterWidgetTemplatesRequest {
    filter: string;
    sort: string;
    expand: string;
    project: string;
    limit?: number;
    offset?: number;
}

export interface UpdateWidgetTemplateRequest {
    id: string;
    widgetTemplateDraftDTO: WidgetTemplateDraftDTO;
}

/**
 * 
 */
export class WidgetTemplatesApi extends runtime.BaseAPI {

    /**
     * Creates new record
     */
    async createWidgetTemplateRaw(requestParameters: CreateWidgetTemplateRequest): Promise<runtime.ApiResponse<WidgetTemplateDTO>> {
        if (requestParameters.widgetTemplateDraftDTO === null || requestParameters.widgetTemplateDraftDTO === undefined) {
            throw new runtime.RequiredError('widgetTemplateDraftDTO','Required parameter requestParameters.widgetTemplateDraftDTO was null or undefined when calling createWidgetTemplate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cms/widget-templates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WidgetTemplateDraftDTOToJSON(requestParameters.widgetTemplateDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WidgetTemplateDTOFromJSON(jsonValue));
    }

    /**
     * Creates new record
     */
    async createWidgetTemplate(requestParameters: CreateWidgetTemplateRequest): Promise<WidgetTemplateDTO> {
        const response = await this.createWidgetTemplateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a record by id
     */
    async deleteWidgetTemplateByIdRaw(requestParameters: DeleteWidgetTemplateByIdRequest): Promise<runtime.ApiResponse<WidgetTemplateDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteWidgetTemplateById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cms/widget-templates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WidgetTemplateDTOFromJSON(jsonValue));
    }

    /**
     * Deletes a record by id
     */
    async deleteWidgetTemplateById(requestParameters: DeleteWidgetTemplateByIdRequest): Promise<WidgetTemplateDTO> {
        const response = await this.deleteWidgetTemplateByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Filters the collection
     */
    async filterWidgetTemplatesRaw(requestParameters: FilterWidgetTemplatesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError('filter','Required parameter requestParameters.filter was null or undefined when calling filterWidgetTemplates.');
        }

        if (requestParameters.sort === null || requestParameters.sort === undefined) {
            throw new runtime.RequiredError('sort','Required parameter requestParameters.sort was null or undefined when calling filterWidgetTemplates.');
        }

        if (requestParameters.expand === null || requestParameters.expand === undefined) {
            throw new runtime.RequiredError('expand','Required parameter requestParameters.expand was null or undefined when calling filterWidgetTemplates.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling filterWidgetTemplates.');
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
            path: `/cms/widget-templates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Filters the collection
     */
    async filterWidgetTemplates(requestParameters: FilterWidgetTemplatesRequest): Promise<void> {
        await this.filterWidgetTemplatesRaw(requestParameters);
    }

    /**
     * Updates a record
     */
    async updateWidgetTemplateRaw(requestParameters: UpdateWidgetTemplateRequest): Promise<runtime.ApiResponse<WidgetTemplateDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateWidgetTemplate.');
        }

        if (requestParameters.widgetTemplateDraftDTO === null || requestParameters.widgetTemplateDraftDTO === undefined) {
            throw new runtime.RequiredError('widgetTemplateDraftDTO','Required parameter requestParameters.widgetTemplateDraftDTO was null or undefined when calling updateWidgetTemplate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cms/widget-templates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: WidgetTemplateDraftDTOToJSON(requestParameters.widgetTemplateDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WidgetTemplateDTOFromJSON(jsonValue));
    }

    /**
     * Updates a record
     */
    async updateWidgetTemplate(requestParameters: UpdateWidgetTemplateRequest): Promise<WidgetTemplateDTO> {
        const response = await this.updateWidgetTemplateRaw(requestParameters);
        return await response.value();
    }

}
