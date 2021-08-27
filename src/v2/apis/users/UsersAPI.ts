/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { UserDTO } from '@models';
import { UserProfileUpdateDTO } from '@models';
import { PasswordChangeDTO } from '@models';
import { PasswordTokenDTO } from '@models';
import { PasswordResetDTO } from '@models';
import { UserFilterResultDTO } from '@models';
import { UserDraftDTO } from '@models';
import { UserUpdateDTO } from '@models';

export const UsersGetMyProfile = async (): Promise<UserDTO> => {
    const response = await HttpClient.request({
        path: `/users/users/my-profile`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as UserDTO;
}

export const UsersUpdateMyProfile = async (dto: UserProfileUpdateDTO): Promise<UserDTO> => {
    const response = await HttpClient.request({
        path: `/users/users/my-profile`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as UserDTO;
}

export const UsersChangePassword = async (dto: PasswordChangeDTO): Promise<UserDTO> => {
    const response = await HttpClient.request({
        path: `/users/users/password`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as UserDTO;
}

export const UsersCreatePasswordToken = async (dto: PasswordTokenDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/users/users/password-token`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    
}

export const UsersResetPassword = async (dto: PasswordResetDTO): Promise<UserDTO> => {
    const response = await HttpClient.request({
        path: `/users/users/password/reset`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as UserDTO;
}

export const UsersFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<UserFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/users`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as UserFilterResultDTO;
}

export const UsersCreate = async (dto: UserDraftDTO): Promise<UserDTO> => {
    const response = await HttpClient.request({
        path: `/users/users`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as UserDTO;
}

export const UsersGetById = async (id: string): Promise<UserDTO> => {
    const response = await HttpClient.request({
        path: `/users/users/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as UserDTO;
}

export const UsersUpdate = async (id: string, dto: UserUpdateDTO): Promise<UserDTO> => {
    const response = await HttpClient.request({
        path: `/users/users/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as UserDTO;
}

export const UsersDelete = async (id: string): Promise<UserDTO> => {
    const response = await HttpClient.request({
        path: `/users/users/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as UserDTO;
}

