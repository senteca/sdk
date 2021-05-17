/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { EvropatLocationCountryDTO } from '../../models/EvropatLocationCountryDTO';
import { EvropatLocationCityDTO } from '../../models/EvropatLocationCityDTO';
import { EvropatLocationQuarterDTO } from '../../models/EvropatLocationQuarterDTO';
import { EvropatLocationStreetDTO } from '../../models/EvropatLocationStreetDTO';
import { EvropatLocationOfficeDTO } from '../../models/EvropatLocationOfficeDTO';
import { EvropatCountryDTO } from '../../models/EvropatCountryDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { EvropatCityDTO } from '../../models/EvropatCityDTO';
import { EvropatQuarterDTO } from '../../models/EvropatQuarterDTO';
import { EvropatStreetDTO } from '../../models/EvropatStreetDTO';
import { EvropatOfficeDTO } from '../../models/EvropatOfficeDTO';

export const MyShippingsEvropatFindCountry = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationCountryDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/find-country`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatLocationCountryDTO[];
}

export const MyShippingsEvropatFindCity = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/find-city`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatLocationCityDTO[];
}

export const MyShippingsEvropatFindQuarter = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationQuarterDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/find-quarter`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatLocationQuarterDTO[];
}

export const MyShippingsEvropatFindStreet = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationStreetDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/find-street`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatLocationStreetDTO[];
}

export const MyShippingsEvropatFindOffice = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationOfficeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/find-office`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatLocationOfficeDTO[];
}

export const MyShippingsEvropatSetCountry = async (dto: EvropatCountryDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/country`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEvropatUnsetCountry = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/country`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
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

export const MyShippingsEvropatSetQuarter = async (dto: EvropatQuarterDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/quarter`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEvropatUnsetQuarter = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/quarter`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEvropatSetStreet = async (dto: EvropatStreetDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/street`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEvropatUnsetStreet = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/evropat/street`,
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

