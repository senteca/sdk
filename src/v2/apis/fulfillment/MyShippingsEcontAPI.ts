/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { EcontLocationCountryDTO } from '@models';
import { EcontLocationCityDTO } from '@models';
import { EcontLocationQuarterDTO } from '@models';
import { EcontLocationStreetDTO } from '@models';
import { EcontLocationOfficeDTO } from '@models';
import { EcontCountryDTO } from '@models';
import { OrderDTO } from '@models';
import { EcontCityDTO } from '@models';
import { EcontQuarterDTO } from '@models';
import { EcontStreetDTO } from '@models';
import { EcontOfficeDTO } from '@models';

export const MyShippingsEcontFindCountry = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationCountryDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/find-country`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EcontLocationCountryDTO[];
}

export const MyShippingsEcontFindCity = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/find-city`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EcontLocationCityDTO[];
}

export const MyShippingsEcontFindQuarter = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationQuarterDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/find-quarter`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EcontLocationQuarterDTO[];
}

export const MyShippingsEcontFindStreet = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationStreetDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/find-street`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EcontLocationStreetDTO[];
}

export const MyShippingsEcontFindOffice = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationOfficeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/find-office`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EcontLocationOfficeDTO[];
}

export const MyShippingsEcontSetCountry = async (dto: EcontCountryDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/country`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEcontUnsetCountry = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/country`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEcontSetCity = async (dto: EcontCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEcontUnsetCity = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/city`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEcontSetQuarter = async (dto: EcontQuarterDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/quarter`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEcontUnsetQuarter = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/quarter`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEcontSetStreet = async (dto: EcontStreetDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/street`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEcontUnsetStreet = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/street`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEcontSetOffice = async (dto: EcontOfficeDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/office`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsEcontUnsetOffice = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/econt/office`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

