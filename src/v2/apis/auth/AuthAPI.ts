/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { TokenRequestDTO } from '@models';
import { TokenResponseDTO } from '@models';
import { LoginRequestDTO } from '@models';
import { OAuthTokenRequestDTO } from '@models';
import { RegisterRequestDTO } from '@models';

export const AuthCreateToken = async (basicAuth: { username: string, password: string }, query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string }, dto: TokenRequestDTO): Promise<TokenResponseDTO> => {
    const response = await HttpClient.request({
        path: `/auth/token`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        basicAuth,
        contentType: 'application/json',
    });
    return (response as unknown) as TokenResponseDTO;
}

export const AuthLogin = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string }, dto: LoginRequestDTO): Promise<TokenResponseDTO> => {
    const response = await HttpClient.request({
        path: `/auth/login`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TokenResponseDTO;
}

export const AuthCreateFacebookToken = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string, access_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> => {
    const response = await HttpClient.request({
        path: `/auth/facebook/token`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TokenResponseDTO;
}

export const AuthCreateGoogleToken = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string, access_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> => {
    const response = await HttpClient.request({
        path: `/auth/google/token`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TokenResponseDTO;
}

export const AuthCreateAppleToken = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string, id_token: string }, dto: OAuthTokenRequestDTO): Promise<TokenResponseDTO> => {
    const response = await HttpClient.request({
        path: `/auth/apple/token`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TokenResponseDTO;
}

export const AuthCreateAnonymousToken = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string }, dto: TokenRequestDTO): Promise<TokenResponseDTO> => {
    const response = await HttpClient.request({
        path: `/auth/anonymous`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TokenResponseDTO;
}

export const AuthRefreshToken = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string }, dto: TokenRequestDTO): Promise<TokenResponseDTO> => {
    const response = await HttpClient.request({
        path: `/auth/refresh`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TokenResponseDTO;
}

export const AuthRegister = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, requiresEmailVerification?: boolean, requiresInvitation?: boolean, defaultCustomerStatus?: string, defaultCustomerGroupKey?: string }, dto: RegisterRequestDTO): Promise<TokenResponseDTO> => {
    const response = await HttpClient.request({
        path: `/auth/register`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TokenResponseDTO;
}

