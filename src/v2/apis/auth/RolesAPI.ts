/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { Permission, RoleFilterResultDTO, RoleDraftDTO, RoleDTO } from '../../../models';

export const RolesGetPermissions = async (): Promise<Permission[]> => {
    const response = await HttpClient.request({
        path: `/auth/roles/permissions`,
        method: 'GET',
    });
    return (response as unknown) as Permission[];
}

export const RolesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<RoleFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/auth/roles`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as RoleFilterResultDTO;
}

export const RolesCreate = async (dto: RoleDraftDTO): Promise<RoleDTO> => {
    const response = await HttpClient.request({
        path: `/auth/roles`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as RoleDTO;
}

export const RolesGetById = async (id: string): Promise<RoleDTO> => {
    const response = await HttpClient.request({
        path: `/auth/roles/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as RoleDTO;
}

export const RolesUpdate = async (id: string, dto: RoleDraftDTO): Promise<RoleDTO> => {
    const response = await HttpClient.request({
        path: `/auth/roles/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as RoleDTO;
}

export const RolesDelete = async (id: string): Promise<RoleDTO> => {
    const response = await HttpClient.request({
        path: `/auth/roles/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as RoleDTO;
}

