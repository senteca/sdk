/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerInvitationDraftDTO, CustomerInvitationDTO, CustomerInvitationFilterResultDTO } from '../../../models';

export const CustomerInvitationsCreate = async (dto: CustomerInvitationDraftDTO): Promise<CustomerInvitationDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-invitations`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerInvitationDTO;
}

export const CustomerInvitationsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerInvitationFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-invitations`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CustomerInvitationFilterResultDTO;
}

export const CustomerInvitationsGetByKey = async (key: string): Promise<CustomerInvitationDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-invitations/key=${encodeURIComponent(key)}`,
        method: 'GET',
    });
    return (response as unknown) as CustomerInvitationDTO;
}

export const CustomerInvitationsGetById = async (id: string): Promise<CustomerInvitationDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-invitations/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as CustomerInvitationDTO;
}

export const CustomerInvitationsUpdate = async (id: string, dto: CustomerInvitationDTO): Promise<CustomerInvitationDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-invitations/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerInvitationDTO;
}

export const CustomerInvitationsDelete = async (id: string): Promise<CustomerInvitationDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-invitations/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as CustomerInvitationDTO;
}

export const CustomerInvitationsResend = async (id: string): Promise<CustomerInvitationDTO> => {
    const response = await HttpClient.request({
        path: `/users/customer-invitations/${encodeURIComponent(id)}/resend`,
        method: 'PATCH',
    });
    return (response as unknown) as CustomerInvitationDTO;
}

