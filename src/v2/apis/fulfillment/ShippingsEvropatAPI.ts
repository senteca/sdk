/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { EvropatClientAddressDTO } from '../../models/EvropatClientAddressDTO';
import { EvropatAuthenticationCredentialsDTO } from '../../models/EvropatAuthenticationCredentialsDTO';
import { EvropatLocationCityDTO } from '../../models/EvropatLocationCityDTO';
import { EvropatLocationOfficeDTO } from '../../models/EvropatLocationOfficeDTO';
import { EvropatModuleAddressDTO } from '../../models/EvropatModuleAddressDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { EvropatCityDTO } from '../../models/EvropatCityDTO';
import { EvropatOfficeDTO } from '../../models/EvropatOfficeDTO';
import { EvropatCreateRequestDTO } from '../../models/EvropatCreateRequestDTO';
import { EvropatCreateResponseDTO } from '../../models/EvropatCreateResponseDTO';
import { EvropatSendRequestDTO } from '../../models/EvropatSendRequestDTO';
import { EvropatSendResponseDTO } from '../../models/EvropatSendResponseDTO';
import { EvropatCancelRequestDTO } from '../../models/EvropatCancelRequestDTO';
import { EvropatCancelResponseDTO } from '../../models/EvropatCancelResponseDTO';
import { EvropatTrackRequestDTO } from '../../models/EvropatTrackRequestDTO';
import { EvropatTrackResponseDTO } from '../../models/EvropatTrackResponseDTO';

export const ShippingsEvropatClientAddresses = async (query: { clientKey: string }): Promise<EvropatClientAddressDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/client-addresses`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatClientAddressDTO[];
}

export const ShippingsEvropatSyncLocations = async (dto: EvropatAuthenticationCredentialsDTO): Promise<any> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/sync-locations`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as any;
}

export const ShippingsEvropatFetchCities = async (query: { clientKey: string }): Promise<EvropatLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/fetch/cities`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatLocationCityDTO[];
}

export const ShippingsEvropatFetchOffices = async (query: { clientKey: string }): Promise<EvropatLocationOfficeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/fetch/offices`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatLocationOfficeDTO[];
}

export const ShippingsEvropatSearchCity = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/search/city`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatLocationCityDTO[];
}

export const ShippingsEvropatSearchOffice = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationOfficeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/search/office`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EvropatLocationOfficeDTO[];
}

export const ShippingsEvropatUpdateShippingAddress = async (orderId: string, shippingId: string, dto: EvropatModuleAddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEvropatSetCity = async (orderId: string, shippingId: string, dto: EvropatCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEvropatUnsetCity = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEvropatSetOffice = async (orderId: string, shippingId: string, dto: EvropatOfficeDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEvropatUnsetOffice = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEvropatUpdateDeliveryAddress = async (orderId: string, shippingId: string, deliveryId: string, dto: EvropatModuleAddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEvropatSetDeliveryCity = async (orderId: string, shippingId: string, deliveryId: string, dto: EvropatCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEvropatSetDeliveryOffice = async (orderId: string, shippingId: string, deliveryId: string, dto: EvropatOfficeDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/office`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEvropatCreateRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EvropatCreateRequestDTO): Promise<EvropatCreateResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/create-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EvropatCreateResponseDTO;
}

export const ShippingsEvropatSendRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EvropatSendRequestDTO): Promise<EvropatSendResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/send-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EvropatSendResponseDTO;
}

export const ShippingsEvropatCancelRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EvropatCancelRequestDTO): Promise<EvropatCancelResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/cancel-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EvropatCancelResponseDTO;
}

export const ShippingsEvropatTrackRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EvropatTrackRequestDTO): Promise<EvropatTrackResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/track-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EvropatTrackResponseDTO;
}

