/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { FancourierLocationCityDTO } from '../../models/FancourierLocationCityDTO';
import { FancourierLocationStreetDTO } from '../../models/FancourierLocationStreetDTO';
import { FancourierCityDTO } from '../../models/FancourierCityDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { FancourierStreetDTO } from '../../models/FancourierStreetDTO';

export const MyShippingsFancourierFindCity = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<FancourierLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/fancourier/find-city`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as FancourierLocationCityDTO[];
}

export const MyShippingsFancourierFindStreet = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<FancourierLocationStreetDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/fancourier/find-street`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as FancourierLocationStreetDTO[];
}

export const MyShippingsFancourierSetCity = async (dto: FancourierCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/fancourier/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsFancourierUnsetCity = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/fancourier/city`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsFancourierSetStreet = async (dto: FancourierStreetDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/fancourier/street`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyShippingsFancourierUnsetStreet = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/fancourier/street`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

