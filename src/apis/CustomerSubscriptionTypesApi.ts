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
    CustomerSubscriptionTypeDTO,
    CustomerSubscriptionTypeDTOFromJSON,
    CustomerSubscriptionTypeDTOToJSON,
} from '../models';

export interface CreateCustomerSubscriptionTypeRequest {
    customerSubscriptionTypeDTO: CustomerSubscriptionTypeDTO;
}

export interface DeleteCustomerSubscriptionTypeByIdRequest {
    id: string;
}

export interface FilterCustomerSubscriptionTypesRequest {
    filter: string;
    sort: string;
    expand: string;
    project: string;
    limit?: number;
    offset?: number;
}

export interface FindCustomerSubscriptionTypeByIdRequest {
    id: string;
}

export interface UpdateCustomerSubscriptionTypeByIdRequest {
    id: string;
    customerSubscriptionTypeDTO: CustomerSubscriptionTypeDTO;
}

/**
 * 
 */
export class CustomerSubscriptionTypesApi extends runtime.BaseAPI {

    /**
     * Creates a new customer subscription type, e.g. newsletter.
     */
    async createCustomerSubscriptionTypeRaw(requestParameters: CreateCustomerSubscriptionTypeRequest): Promise<runtime.ApiResponse<CustomerSubscriptionTypeDTO>> {
        if (requestParameters.customerSubscriptionTypeDTO === null || requestParameters.customerSubscriptionTypeDTO === undefined) {
            throw new runtime.RequiredError('customerSubscriptionTypeDTO','Required parameter requestParameters.customerSubscriptionTypeDTO was null or undefined when calling createCustomerSubscriptionType.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/customer-subscription-types`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerSubscriptionTypeDTOToJSON(requestParameters.customerSubscriptionTypeDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerSubscriptionTypeDTOFromJSON(jsonValue));
    }

    /**
     * Creates a new customer subscription type, e.g. newsletter.
     */
    async createCustomerSubscriptionType(requestParameters: CreateCustomerSubscriptionTypeRequest): Promise<CustomerSubscriptionTypeDTO> {
        const response = await this.createCustomerSubscriptionTypeRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a customer subscription type by id.
     */
    async deleteCustomerSubscriptionTypeByIdRaw(requestParameters: DeleteCustomerSubscriptionTypeByIdRequest): Promise<runtime.ApiResponse<CustomerSubscriptionTypeDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteCustomerSubscriptionTypeById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/customer-subscription-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerSubscriptionTypeDTOFromJSON(jsonValue));
    }

    /**
     * Deletes a customer subscription type by id.
     */
    async deleteCustomerSubscriptionTypeById(requestParameters: DeleteCustomerSubscriptionTypeByIdRequest): Promise<CustomerSubscriptionTypeDTO> {
        const response = await this.deleteCustomerSubscriptionTypeByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all customer subscription types.
     */
    async filterCustomerSubscriptionTypesRaw(requestParameters: FilterCustomerSubscriptionTypesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError('filter','Required parameter requestParameters.filter was null or undefined when calling filterCustomerSubscriptionTypes.');
        }

        if (requestParameters.sort === null || requestParameters.sort === undefined) {
            throw new runtime.RequiredError('sort','Required parameter requestParameters.sort was null or undefined when calling filterCustomerSubscriptionTypes.');
        }

        if (requestParameters.expand === null || requestParameters.expand === undefined) {
            throw new runtime.RequiredError('expand','Required parameter requestParameters.expand was null or undefined when calling filterCustomerSubscriptionTypes.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling filterCustomerSubscriptionTypes.');
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
            path: `/users/customer-subscription-types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Lists all customer subscription types.
     */
    async filterCustomerSubscriptionTypes(requestParameters: FilterCustomerSubscriptionTypesRequest): Promise<void> {
        await this.filterCustomerSubscriptionTypesRaw(requestParameters);
    }

    /**
     * Returns a customer subscription type by id.
     */
    async findCustomerSubscriptionTypeByIdRaw(requestParameters: FindCustomerSubscriptionTypeByIdRequest): Promise<runtime.ApiResponse<CustomerSubscriptionTypeDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findCustomerSubscriptionTypeById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/customer-subscription-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerSubscriptionTypeDTOFromJSON(jsonValue));
    }

    /**
     * Returns a customer subscription type by id.
     */
    async findCustomerSubscriptionTypeById(requestParameters: FindCustomerSubscriptionTypeByIdRequest): Promise<CustomerSubscriptionTypeDTO> {
        const response = await this.findCustomerSubscriptionTypeByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates a customer subscription type by id.
     */
    async updateCustomerSubscriptionTypeByIdRaw(requestParameters: UpdateCustomerSubscriptionTypeByIdRequest): Promise<runtime.ApiResponse<CustomerSubscriptionTypeDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateCustomerSubscriptionTypeById.');
        }

        if (requestParameters.customerSubscriptionTypeDTO === null || requestParameters.customerSubscriptionTypeDTO === undefined) {
            throw new runtime.RequiredError('customerSubscriptionTypeDTO','Required parameter requestParameters.customerSubscriptionTypeDTO was null or undefined when calling updateCustomerSubscriptionTypeById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/customer-subscription-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerSubscriptionTypeDTOToJSON(requestParameters.customerSubscriptionTypeDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerSubscriptionTypeDTOFromJSON(jsonValue));
    }

    /**
     * Updates a customer subscription type by id.
     */
    async updateCustomerSubscriptionTypeById(requestParameters: UpdateCustomerSubscriptionTypeByIdRequest): Promise<CustomerSubscriptionTypeDTO> {
        const response = await this.updateCustomerSubscriptionTypeByIdRaw(requestParameters);
        return await response.value();
    }

}
