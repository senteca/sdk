/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerConsentTypeDraftDTO } from '@models';
import { CustomerConsentTypeDTO } from '@models';
import { CustomerConsentTypeFilterResultDTO } from '@models';

export const CustomerConsentTypesCreate = async (dto: CustomerConsentTypeDraftDTO): Promise<CustomerConsentTypeDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-consent-types`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerConsentTypeDTO;
}

export const CustomerConsentTypesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentTypeFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-consent-types`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CustomerConsentTypeFilterResultDTO;
}

export const CustomerConsentTypesGetByKey = async (key: string): Promise<CustomerConsentTypeDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-consent-types/key=${encodeURIComponent(key)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as CustomerConsentTypeDTO;
}

export const CustomerConsentTypesGetByTag = async (tag: string): Promise<CustomerConsentTypeDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/customer-consent-types/tag=${encodeURIComponent(tag)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as CustomerConsentTypeDTO[];
}

export const CustomerConsentTypesGetById = async (id: string): Promise<CustomerConsentTypeDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-consent-types/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as CustomerConsentTypeDTO;
}

export const CustomerConsentTypesUpdate = async (id: string, dto: CustomerConsentTypeDTO): Promise<CustomerConsentTypeDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-consent-types/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerConsentTypeDTO;
}

export const CustomerConsentTypesDelete = async (id: string): Promise<CustomerConsentTypeDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-consent-types/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as CustomerConsentTypeDTO;
}

