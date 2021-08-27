/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerGroupDraftDTO } from '@models';
import { CustomerGroupDTO } from '@models';
import { CustomerGroupFilterResultDTO } from '@models';

export const CustomerGroupsCreate = async (dto: CustomerGroupDraftDTO): Promise<CustomerGroupDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-groups`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerGroupDTO;
}

export const CustomerGroupsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerGroupFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-groups`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CustomerGroupFilterResultDTO;
}

export const CustomerGroupsGetByKey = async (key: string): Promise<CustomerGroupDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-groups/key=${encodeURIComponent(key)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as CustomerGroupDTO;
}

export const CustomerGroupsGetById = async (id: string): Promise<CustomerGroupDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-groups/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as CustomerGroupDTO;
}

export const CustomerGroupsUpdate = async (id: string, dto: CustomerGroupDTO): Promise<CustomerGroupDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-groups/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerGroupDTO;
}

export const CustomerGroupsDelete = async (id: string): Promise<CustomerGroupDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-groups/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as CustomerGroupDTO;
}

