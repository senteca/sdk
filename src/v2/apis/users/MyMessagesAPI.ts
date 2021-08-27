/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerMessageFilterResultDTO,CustomerMessageStatusUpdateDTO,CustomerMessageDTO } from '../../../models';

export const MyMessagesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerMessageFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-messages`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CustomerMessageFilterResultDTO;
}

export const MyMessagesSetStatus = async (id: string, dto: CustomerMessageStatusUpdateDTO): Promise<CustomerMessageDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-messages/${encodeURIComponent(id)}/status`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerMessageDTO;
}

