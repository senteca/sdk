/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerConsentDTO } from '../../models/CustomerConsentDTO';
import { CustomerConsentRequestDTO } from '../../models/CustomerConsentRequestDTO';
import { CustomerConsentRequestBulkDTO } from '../../models/CustomerConsentRequestBulkDTO';

export const MyConsentsGetMyConsents = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/my-consents`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CustomerConsentDTO[];
}

export const MyConsentsApprove = async (dto: CustomerConsentRequestDTO): Promise<CustomerConsentDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-consents/approve`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerConsentDTO;
}

export const MyConsentsApproveBulk = async (dto: CustomerConsentRequestBulkDTO): Promise<CustomerConsentDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/my-consents/approve/bulk`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerConsentDTO[];
}

export const MyConsentsReject = async (dto: CustomerConsentRequestDTO): Promise<CustomerConsentDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-consents/reject`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerConsentDTO;
}

