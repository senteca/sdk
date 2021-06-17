/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { SpeedyAuthenticationCredentialsDTO } from '../../models/SpeedyAuthenticationCredentialsDTO';
import { SpeedyLocationCountryDTO } from '../../models/SpeedyLocationCountryDTO';
import { SpeedyLocationCityDTO } from '../../models/SpeedyLocationCityDTO';
import { SpeedyLocationQuarterDTO } from '../../models/SpeedyLocationQuarterDTO';
import { SpeedyLocationStreetDTO } from '../../models/SpeedyLocationStreetDTO';
import { SpeedyLocationOfficeDTO } from '../../models/SpeedyLocationOfficeDTO';
import { SpeedyModuleAddressDTO } from '../../models/SpeedyModuleAddressDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { SpeedyCountryDTO } from '../../models/SpeedyCountryDTO';
import { SpeedyCityDTO } from '../../models/SpeedyCityDTO';
import { SpeedyQuarterDTO } from '../../models/SpeedyQuarterDTO';
import { SpeedyStreetDTO } from '../../models/SpeedyStreetDTO';
import { SpeedyOfficeDTO } from '../../models/SpeedyOfficeDTO';
import { SpeedyCreateRequestDTO } from '../../models/SpeedyCreateRequestDTO';
import { SpeedyCreateResponseDTO } from '../../models/SpeedyCreateResponseDTO';
import { SpeedySendResponseDTO } from '../../models/SpeedySendResponseDTO';
import { SpeedyCancelRequestDTO } from '../../models/SpeedyCancelRequestDTO';
import { SpeedyTrackRequestDTO } from '../../models/SpeedyTrackRequestDTO';
import { SpeedyTrackResponseDTO } from '../../models/SpeedyTrackResponseDTO';

export const ShippingsSpeedySyncLocations = async (dto: SpeedyAuthenticationCredentialsDTO): Promise<any> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/sync-locations`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as any;
}

export const ShippingsSpeedyFetchCountries = async (dto: SpeedyAuthenticationCredentialsDTO): Promise<SpeedyLocationCountryDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/fetch/countries`,
        method: 'GET',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as SpeedyLocationCountryDTO[];
}

export const ShippingsSpeedyFetchCities = async (dto: SpeedyAuthenticationCredentialsDTO): Promise<SpeedyLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/fetch/cities`,
        method: 'GET',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as SpeedyLocationCityDTO[];
}

export const ShippingsSpeedyFetchQuarters = async (dto: SpeedyAuthenticationCredentialsDTO): Promise<SpeedyLocationQuarterDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/fetch/quarters`,
        method: 'GET',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as SpeedyLocationQuarterDTO[];
}

export const ShippingsSpeedyFetchStreets = async (dto: SpeedyAuthenticationCredentialsDTO): Promise<SpeedyLocationStreetDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/fetch/streets`,
        method: 'GET',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as SpeedyLocationStreetDTO[];
}

export const ShippingsSpeedyFetchOffices = async (dto: SpeedyAuthenticationCredentialsDTO): Promise<SpeedyLocationOfficeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/fetch/offices`,
        method: 'GET',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as SpeedyLocationOfficeDTO[];
}

export const ShippingsSpeedySearchCountry = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationCountryDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/search/country`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as SpeedyLocationCountryDTO[];
}

export const ShippingsSpeedySearchCity = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/search/city`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as SpeedyLocationCityDTO[];
}

export const ShippingsSpeedySearchQuarter = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationQuarterDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/search/quarter`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as SpeedyLocationQuarterDTO[];
}

export const ShippingsSpeedySearchStreet = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationStreetDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/search/street`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as SpeedyLocationStreetDTO[];
}

export const ShippingsSpeedySearchOffice = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationOfficeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/search/office`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as SpeedyLocationOfficeDTO[];
}

export const ShippingsSpeedyUpdateShippingAddress = async (orderId: string, shippingId: string, dto: SpeedyModuleAddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedySetCountry = async (orderId: string, shippingId: string, dto: SpeedyCountryDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/country`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedyUnsetCountry = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/country`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedySetCity = async (orderId: string, shippingId: string, dto: SpeedyCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedyUnsetCity = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedySetQuarter = async (orderId: string, shippingId: string, dto: SpeedyQuarterDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/quarter`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedyUnsetQuarter = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/quarter`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedySetStreet = async (orderId: string, shippingId: string, dto: SpeedyStreetDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedyUnsetStreet = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedySetOffice = async (orderId: string, shippingId: string, dto: SpeedyOfficeDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedyUnsetOffice = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedyUpdateDeliveryAddress = async (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyModuleAddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedySetDeliveryCountry = async (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyCountryDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/country`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedySetDeliveryCity = async (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedySetDeliveryQuarter = async (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyQuarterDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/quarter`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedySetDeliveryStreet = async (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyStreetDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/street`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedySetDeliveryOffice = async (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyOfficeDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/office`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedyCreateRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedyCreateRequestDTO): Promise<SpeedyCreateResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/create-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as SpeedyCreateResponseDTO;
}

export const ShippingsSpeedySendRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedyCreateRequestDTO): Promise<SpeedySendResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/send-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as SpeedySendResponseDTO;
}

export const ShippingsSpeedyCancelRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedyCancelRequestDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/cancel-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsSpeedyTrackRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedyTrackRequestDTO): Promise<SpeedyTrackResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/track-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as SpeedyTrackResponseDTO;
}

