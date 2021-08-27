/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerMessageDTO } from '@models';
import { CustomerMessageFilterResultDTO } from '@models';

export const CustomerMessagesCreate = async (dto: CustomerMessageDTO): Promise<CustomerMessageDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-messages`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerMessageDTO;
}

export const CustomerMessagesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerMessageFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-messages`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CustomerMessageFilterResultDTO;
}

export const CustomerMessagesGetById = async (id: string): Promise<CustomerMessageDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-messages/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as CustomerMessageDTO;
}

export const CustomerMessagesUpdate = async (id: string, dto: CustomerMessageDTO): Promise<CustomerMessageDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-messages/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerMessageDTO;
}

export const CustomerMessagesDelete = async (id: string): Promise<CustomerMessageDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-messages/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as CustomerMessageDTO;
}

