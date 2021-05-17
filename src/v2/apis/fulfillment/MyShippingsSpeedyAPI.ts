/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { SpeedyLocationCountryDTO } from '../../models/SpeedyLocationCountryDTO';
import { SpeedyLocationCityDTO } from '../../models/SpeedyLocationCityDTO';
import { SpeedyLocationQuarterDTO } from '../../models/SpeedyLocationQuarterDTO';
import { SpeedyLocationStreetDTO } from '../../models/SpeedyLocationStreetDTO';
import { SpeedyLocationOfficeDTO } from '../../models/SpeedyLocationOfficeDTO';
import { SpeedyCountryDTO } from '../../models/SpeedyCountryDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { SpeedyCityDTO } from '../../models/SpeedyCityDTO';
import { SpeedyQuarterDTO } from '../../models/SpeedyQuarterDTO';
import { SpeedyStreetDTO } from '../../models/SpeedyStreetDTO';
import { SpeedyOfficeDTO } from '../../models/SpeedyOfficeDTO';

export const MyShippingsSpeedyFindCountry = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationCountryDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/find-country`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as SpeedyLocationCountryDTO[];
}

export const MyShippingsSpeedyFindCity = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/find-city`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as SpeedyLocationCityDTO[];
}

export const MyShippingsSpeedyFindQuarter = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationQuarterDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/find-quarter`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as SpeedyLocationQuarterDTO[];
}

export const MyShippingsSpeedyFindStreet = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationStreetDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/find-street`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as SpeedyLocationStreetDTO[];
}

export const MyShippingsSpeedyFindOffice = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationOfficeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/find-office`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as SpeedyLocationOfficeDTO[];
}

export const MyShippingsSpeedySetCountry = async (dto: SpeedyCountryDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/country`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsSpeedyUnsetCountry = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/country`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsSpeedySetCity = async (dto: SpeedyCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsSpeedyUnsetCity = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/city`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsSpeedySetQuarter = async (dto: SpeedyQuarterDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/quarter`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsSpeedyUnsetQuarter = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/quarter`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsSpeedySetStreet = async (dto: SpeedyStreetDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/street`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsSpeedyUnsetStreet = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/street`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsSpeedySetOffice = async (dto: SpeedyOfficeDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/office`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsSpeedyUnsetOffice = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/speedy/office`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

