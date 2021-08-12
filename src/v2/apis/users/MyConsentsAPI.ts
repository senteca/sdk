/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerConsentDTO } from '../../models/CustomerConsentDTO';
import { CustomerConsentRequestDTO } from '../../models/CustomerConsentRequestDTO';
import { CustomerConsentRequestBulkDTO } from '../../models/CustomerConsentRequestBulkDTO';
import { CustomerConsentConfirmDTO } from '../../models/CustomerConsentConfirmDTO';

export const MyConsentsGetMyConsents = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/my-consents`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as CustomerConsentDTO[];
}

export const MyConsentsApprove = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: CustomerConsentRequestDTO): Promise<CustomerConsentDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-consents/approve`,
        method: 'PUT',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerConsentDTO;
}

export const MyConsentsApproveBulk = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: CustomerConsentRequestBulkDTO): Promise<CustomerConsentDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/my-consents/approve/bulk`,
        method: 'PUT',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerConsentDTO[];
}

export const MyConsentsReject = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: CustomerConsentRequestDTO): Promise<CustomerConsentDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-consents/reject`,
        method: 'PUT',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerConsentDTO;
}

export const MyConsentsConfirm = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: CustomerConsentConfirmDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/users/my-consents/confirm`,
        method: 'PUT',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    
}

