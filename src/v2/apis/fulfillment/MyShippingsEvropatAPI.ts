/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { EvropatLocationCityDTO } from '@models';
import { EvropatLocationOfficeDTO } from '@models';
import { EvropatCityDTO } from '@models';
import { OrderDTO } from '@models';
import { EvropatOfficeDTO } from '@models';

export const MyShippingsEvropatFindCity = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/find-city`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatLocationCityDTO[];
}

export const MyShippingsEvropatFindOffice = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationOfficeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/find-office`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatLocationOfficeDTO[];
}

export const MyShippingsEvropatSetCity = async (dto: EvropatCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEvropatUnsetCity = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/city`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEvropatSetOffice = async (dto: EvropatOfficeDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/office`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEvropatUnsetOffice = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/office`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

