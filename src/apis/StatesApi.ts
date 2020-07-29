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
    StateDTO,
    StateDTOFromJSON,
    StateDTOToJSON,
    StateDraftDTO,
    StateDraftDTOFromJSON,
    StateDraftDTOToJSON,
} from '../models';

export interface CreateStateRequest {
    stateDraftDTO: StateDraftDTO;
}

export interface DeleteStateByIdRequest {
    id: string;
}

export interface FilterStatesRequest {
    filter: string;
    sort: string;
    expand: string;
    limit?: number;
    offset?: number;
}

export interface FindStateByIdRequest {
    id: string;
}

export interface FindStateByKeyRequest {
    key: string;
}

export interface UpdateStateByIdRequest {
    id: string;
    stateDraftDTO: StateDraftDTO;
}

/**
 * 
 */
export class StatesApi extends runtime.BaseAPI {

    /**
     * Creates a new state.
     */
    async createStateRaw(requestParameters: CreateStateRequest): Promise<runtime.ApiResponse<StateDTO>> {
        if (requestParameters.stateDraftDTO === null || requestParameters.stateDraftDTO === undefined) {
            throw new runtime.RequiredError('stateDraftDTO','Required parameter requestParameters.stateDraftDTO was null or undefined when calling createState.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/config/states`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateDraftDTOToJSON(requestParameters.stateDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StateDTOFromJSON(jsonValue));
    }

    /**
     * Creates a new state.
     */
    async createState(requestParameters: CreateStateRequest): Promise<StateDTO> {
        const response = await this.createStateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a state by id.
     */
    async deleteStateByIdRaw(requestParameters: DeleteStateByIdRequest): Promise<runtime.ApiResponse<StateDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteStateById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/config/states/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StateDTOFromJSON(jsonValue));
    }

    /**
     * Deletes a state by id.
     */
    async deleteStateById(requestParameters: DeleteStateByIdRequest): Promise<StateDTO> {
        const response = await this.deleteStateByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all states.
     */
    async filterStatesRaw(requestParameters: FilterStatesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError('filter','Required parameter requestParameters.filter was null or undefined when calling filterStates.');
        }

        if (requestParameters.sort === null || requestParameters.sort === undefined) {
            throw new runtime.RequiredError('sort','Required parameter requestParameters.sort was null or undefined when calling filterStates.');
        }

        if (requestParameters.expand === null || requestParameters.expand === undefined) {
            throw new runtime.RequiredError('expand','Required parameter requestParameters.expand was null or undefined when calling filterStates.');
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
            path: `/config/states`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Lists all states.
     */
    async filterStates(requestParameters: FilterStatesRequest): Promise<void> {
        await this.filterStatesRaw(requestParameters);
    }

    /**
     * Returns a state by id.
     */
    async findStateByIdRaw(requestParameters: FindStateByIdRequest): Promise<runtime.ApiResponse<StateDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findStateById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/config/states/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StateDTOFromJSON(jsonValue));
    }

    /**
     * Returns a state by id.
     */
    async findStateById(requestParameters: FindStateByIdRequest): Promise<StateDTO> {
        const response = await this.findStateByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a state by key.
     */
    async findStateByKeyRaw(requestParameters: FindStateByKeyRequest): Promise<runtime.ApiResponse<StateDTO>> {
        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling findStateByKey.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/config/states/key/{key}`.replace(`{${"key"}}`, encodeURIComponent(String(requestParameters.key))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StateDTOFromJSON(jsonValue));
    }

    /**
     * Returns a state by key.
     */
    async findStateByKey(requestParameters: FindStateByKeyRequest): Promise<StateDTO> {
        const response = await this.findStateByKeyRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates a state by id.
     */
    async updateStateByIdRaw(requestParameters: UpdateStateByIdRequest): Promise<runtime.ApiResponse<StateDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateStateById.');
        }

        if (requestParameters.stateDraftDTO === null || requestParameters.stateDraftDTO === undefined) {
            throw new runtime.RequiredError('stateDraftDTO','Required parameter requestParameters.stateDraftDTO was null or undefined when calling updateStateById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/config/states/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: StateDraftDTOToJSON(requestParameters.stateDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StateDTOFromJSON(jsonValue));
    }

    /**
     * Updates a state by id.
     */
    async updateStateById(requestParameters: UpdateStateByIdRequest): Promise<StateDTO> {
        const response = await this.updateStateByIdRaw(requestParameters);
        return await response.value();
    }

}
