/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { FancourierAuthenticationCredentialsDTO } from '@models';
import { FancourierLocationRegionDTO } from '@models';
import { FancourierLocationCityDTO } from '@models';
import { FancourierLocationStreetDTO } from '@models';
import { FancourierModuleAddressDTO } from '@models';
import { OrderDTO } from '@models';
import { FancourierRegionDTO } from '@models';
import { FancourierCityDTO } from '@models';
import { FancourierStreetDTO } from '@models';
import { FancourierCreateRequestDTO } from '@models';
import { FancourierCreateResponseDTO } from '@models';
import { FancourierSendResponseDTO } from '@models';
import { FancourierCancelRequestDTO } from '@models';
import { FancourierTrackRequestDTO } from '@models';
import { FancourierTrackResponseDTO } from '@models';

export const ShippingsFancourierSyncLocations = async (dto: FancourierAuthenticationCredentialsDTO): Promise<any> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/sync-locations`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as any;
}

export const ShippingsFancourierFetchRegions = async (query: { username: string, user_pass: string, client_id: string, language: string }): Promise<FancourierLocationRegionDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/fetch/regions`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as FancourierLocationRegionDTO[];
}

export const ShippingsFancourierFetchCities = async (query: { username: string, user_pass: string, client_id: string, language: string }): Promise<FancourierLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/fetch/cities`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as FancourierLocationCityDTO[];
}

export const ShippingsFancourierFetchStreets = async (query: { username: string, user_pass: string, client_id: string, language: string }): Promise<FancourierLocationStreetDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/fetch/streets`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as FancourierLocationStreetDTO[];
}

export const ShippingsFancourierSearchRegion = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<FancourierLocationRegionDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/search/region`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as FancourierLocationRegionDTO[];
}

export const ShippingsFancourierSearchCity = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<FancourierLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/search/city`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as FancourierLocationCityDTO[];
}

export const ShippingsFancourierSearchStreet = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<FancourierLocationStreetDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/search/street`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as FancourierLocationStreetDTO[];
}

export const ShippingsFancourierUpdateShippingAddress = async (orderId: string, shippingId: string, dto: FancourierModuleAddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsFancourierSetRegion = async (orderId: string, shippingId: string, dto: FancourierRegionDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/region`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsFancourierSetCity = async (orderId: string, shippingId: string, dto: FancourierCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsFancourierUnsetCity = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsFancourierSetStreet = async (orderId: string, shippingId: string, dto: FancourierStreetDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsFancourierUnsetStreet = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsFancourierUpdateDeliveryAddress = async (orderId: string, shippingId: string, deliveryId: string, dto: FancourierModuleAddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsFancourierSetDeliveryCity = async (orderId: string, shippingId: string, deliveryId: string, dto: FancourierCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsFancourierSetDeliveryStreet = async (orderId: string, shippingId: string, deliveryId: string, dto: FancourierStreetDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/street`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsFancourierCreateRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: FancourierCreateRequestDTO): Promise<FancourierCreateResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/create-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as FancourierCreateResponseDTO;
}

export const ShippingsFancourierSendRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: FancourierCreateRequestDTO): Promise<FancourierSendResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/send-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as FancourierSendResponseDTO;
}

export const ShippingsFancourierCancelRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: FancourierCancelRequestDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/cancel-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsFancourierTrackRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: FancourierTrackRequestDTO): Promise<FancourierTrackResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/track-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as FancourierTrackResponseDTO;
}

