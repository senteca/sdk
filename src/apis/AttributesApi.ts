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
    AttributeDTO,
    AttributeDTOFromJSON,
    AttributeDTOToJSON,
    AttributeDraftDTO,
    AttributeDraftDTOFromJSON,
    AttributeDraftDTOToJSON,
} from '../models';

export interface CreateAttributeRequest {
    attributeDraftDTO: AttributeDraftDTO;
}

export interface DeleteAttributeByIdRequest {
    id: string;
}

export interface DeleteAttributeByNameRequest {
    name: string;
}

export interface FilterAttributesRequest {
    filter: string;
    sort: string;
    expand: string;
    project: string;
    limit?: number;
    offset?: number;
}

export interface FindAttributeByIdRequest {
    id: string;
}

export interface ImportAttributesRequest {
    attributeDraftDTO: Array<AttributeDraftDTO>;
}

export interface SearchAttributesRequest {
    expand: string;
    language: string;
    term: string;
    limit?: number;
    offset?: number;
}

export interface UpdateAttributeByIdRequest {
    id: string;
    attributeDraftDTO: AttributeDraftDTO;
}

export interface UpdateAttributeByNameRequest {
    name: string;
    attributeDraftDTO: AttributeDraftDTO;
}

/**
 * 
 */
export class AttributesApi extends runtime.BaseAPI {

    /**
     * Creates a new attribute.
     */
    async createAttributeRaw(requestParameters: CreateAttributeRequest): Promise<runtime.ApiResponse<AttributeDTO>> {
        if (requestParameters.attributeDraftDTO === null || requestParameters.attributeDraftDTO === undefined) {
            throw new runtime.RequiredError('attributeDraftDTO','Required parameter requestParameters.attributeDraftDTO was null or undefined when calling createAttribute.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/merchandise/attributes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AttributeDraftDTOToJSON(requestParameters.attributeDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttributeDTOFromJSON(jsonValue));
    }

    /**
     * Creates a new attribute.
     */
    async createAttribute(requestParameters: CreateAttributeRequest): Promise<AttributeDTO> {
        const response = await this.createAttributeRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes an attribute by id.
     */
    async deleteAttributeByIdRaw(requestParameters: DeleteAttributeByIdRequest): Promise<runtime.ApiResponse<AttributeDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteAttributeById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/attributes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttributeDTOFromJSON(jsonValue));
    }

    /**
     * Deletes an attribute by id.
     */
    async deleteAttributeById(requestParameters: DeleteAttributeByIdRequest): Promise<AttributeDTO> {
        const response = await this.deleteAttributeByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes an attribute by name.
     */
    async deleteAttributeByNameRaw(requestParameters: DeleteAttributeByNameRequest): Promise<runtime.ApiResponse<AttributeDTO>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteAttributeByName.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/attributes/name/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttributeDTOFromJSON(jsonValue));
    }

    /**
     * Deletes an attribute by name.
     */
    async deleteAttributeByName(requestParameters: DeleteAttributeByNameRequest): Promise<AttributeDTO> {
        const response = await this.deleteAttributeByNameRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all attributes.
     */
    async filterAttributesRaw(requestParameters: FilterAttributesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError('filter','Required parameter requestParameters.filter was null or undefined when calling filterAttributes.');
        }

        if (requestParameters.sort === null || requestParameters.sort === undefined) {
            throw new runtime.RequiredError('sort','Required parameter requestParameters.sort was null or undefined when calling filterAttributes.');
        }

        if (requestParameters.expand === null || requestParameters.expand === undefined) {
            throw new runtime.RequiredError('expand','Required parameter requestParameters.expand was null or undefined when calling filterAttributes.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling filterAttributes.');
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
            path: `/merchandise/attributes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Lists all attributes.
     */
    async filterAttributes(requestParameters: FilterAttributesRequest): Promise<void> {
        await this.filterAttributesRaw(requestParameters);
    }

    /**
     * Returns an attribute by id.
     */
    async findAttributeByIdRaw(requestParameters: FindAttributeByIdRequest): Promise<runtime.ApiResponse<AttributeDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findAttributeById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/attributes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttributeDTOFromJSON(jsonValue));
    }

    /**
     * Returns an attribute by id.
     */
    async findAttributeById(requestParameters: FindAttributeByIdRequest): Promise<AttributeDTO> {
        const response = await this.findAttributeByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Imports multiple attributes.
     */
    async importAttributesRaw(requestParameters: ImportAttributesRequest): Promise<runtime.ApiResponse<Array<AttributeDTO>>> {
        if (requestParameters.attributeDraftDTO === null || requestParameters.attributeDraftDTO === undefined) {
            throw new runtime.RequiredError('attributeDraftDTO','Required parameter requestParameters.attributeDraftDTO was null or undefined when calling importAttributes.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/merchandise/attributes/import`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.attributeDraftDTO.map(AttributeDraftDTOToJSON),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AttributeDTOFromJSON));
    }

    /**
     * Imports multiple attributes.
     */
    async importAttributes(requestParameters: ImportAttributesRequest): Promise<Array<AttributeDTO>> {
        const response = await this.importAttributesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Searches for attributes by name.
     */
    async searchAttributesRaw(requestParameters: SearchAttributesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.expand === null || requestParameters.expand === undefined) {
            throw new runtime.RequiredError('expand','Required parameter requestParameters.expand was null or undefined when calling searchAttributes.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling searchAttributes.');
        }

        if (requestParameters.term === null || requestParameters.term === undefined) {
            throw new runtime.RequiredError('term','Required parameter requestParameters.term was null or undefined when calling searchAttributes.');
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
            path: `/merchandise/attributes/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Searches for attributes by name.
     */
    async searchAttributes(requestParameters: SearchAttributesRequest): Promise<void> {
        await this.searchAttributesRaw(requestParameters);
    }

    /**
     * Updates an attribute by id.
     */
    async updateAttributeByIdRaw(requestParameters: UpdateAttributeByIdRequest): Promise<runtime.ApiResponse<AttributeDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateAttributeById.');
        }

        if (requestParameters.attributeDraftDTO === null || requestParameters.attributeDraftDTO === undefined) {
            throw new runtime.RequiredError('attributeDraftDTO','Required parameter requestParameters.attributeDraftDTO was null or undefined when calling updateAttributeById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/merchandise/attributes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AttributeDraftDTOToJSON(requestParameters.attributeDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttributeDTOFromJSON(jsonValue));
    }

    /**
     * Updates an attribute by id.
     */
    async updateAttributeById(requestParameters: UpdateAttributeByIdRequest): Promise<AttributeDTO> {
        const response = await this.updateAttributeByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an attribute by name.
     */
    async updateAttributeByNameRaw(requestParameters: UpdateAttributeByNameRequest): Promise<runtime.ApiResponse<AttributeDTO>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling updateAttributeByName.');
        }

        if (requestParameters.attributeDraftDTO === null || requestParameters.attributeDraftDTO === undefined) {
            throw new runtime.RequiredError('attributeDraftDTO','Required parameter requestParameters.attributeDraftDTO was null or undefined when calling updateAttributeByName.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/merchandise/attributes/name/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AttributeDraftDTOToJSON(requestParameters.attributeDraftDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttributeDTOFromJSON(jsonValue));
    }

    /**
     * Updates an attribute by name.
     */
    async updateAttributeByName(requestParameters: UpdateAttributeByNameRequest): Promise<AttributeDTO> {
        const response = await this.updateAttributeByNameRaw(requestParameters);
        return await response.value();
    }

}
