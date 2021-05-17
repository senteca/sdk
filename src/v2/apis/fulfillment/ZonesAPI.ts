/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { ZoneDraftDTO } from '../../models/ZoneDraftDTO';
import { ZoneDTO } from '../../models/ZoneDTO';
import { ZoneFilterResultDTO } from '../../models/ZoneFilterResultDTO';

export const ZonesCreate = async (dto: ZoneDraftDTO): Promise<ZoneDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/zones`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as ZoneDTO;
}

export const ZonesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ZoneFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/zones`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as ZoneFilterResultDTO;
}

export const ZonesGetByKey = async (key: string): Promise<ZoneDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/zones/key=${encodeURIComponent(key)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as ZoneDTO;
}

export const ZonesGetById = async (id: string): Promise<ZoneDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/zones/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as ZoneDTO;
}

export const ZonesUpdate = async (id: string, dto: ZoneDraftDTO): Promise<ZoneDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/zones/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as ZoneDTO;
}

export const ZonesDelete = async (id: string): Promise<ZoneDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/zones/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as ZoneDTO;
}

