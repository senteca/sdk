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
    InternationalsDTO,
    InternationalsDTOFromJSON,
    InternationalsDTOToJSON,
    InternationalsDraftDTO,
    InternationalsDraftDTOFromJSON,
    InternationalsDraftDTOToJSON,
} from '../models';

export interface CreateInternationalsRequest {
    internationalsDTO: InternationalsDTO;
}

export interface FilterInternationalsRequest {
    internationalsDraftDTO: InternationalsDraftDTO;
}

/**
 * 
 */
export class InternationalsApi extends runtime.BaseAPI {

    /**
     * Creates a new internationals record.
     */
    async createInternationalsRaw(requestParameters: CreateInternationalsRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.internationalsDTO === null || requestParameters.internationalsDTO === undefined) {
            throw new runtime.RequiredError('internationalsDTO','Required parameter requestParameters.internationalsDTO was null or undefined when calling createInternationals.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/config/internationals`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InternationalsDTOToJSON(requestParameters.internationalsDTO),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Creates a new internationals record.
     */
    async createInternationals(requestParameters: CreateInternationalsRequest): Promise<object> {
        const response = await this.createInternationalsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all internationals.
     */
    async filterInternationalsRaw(requestParameters: FilterInternationalsRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.internationalsDraftDTO === null || requestParameters.internationalsDraftDTO === undefined) {
            throw new runtime.RequiredError('internationalsDraftDTO','Required parameter requestParameters.internationalsDraftDTO was null or undefined when calling filterInternationals.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/config/internationals`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: InternationalsDraftDTOToJSON(requestParameters.internationalsDraftDTO),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Lists all internationals.
     */
    async filterInternationals(requestParameters: FilterInternationalsRequest): Promise<object> {
        const response = await this.filterInternationalsRaw(requestParameters);
        return await response.value();
    }

}
