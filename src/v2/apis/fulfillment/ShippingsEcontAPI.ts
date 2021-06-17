/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { EcontAuthenticationCredentialsDTO } from '../../models/EcontAuthenticationCredentialsDTO';
import { EcontProfilesResponseElement } from '../../models/EcontProfilesResponseElement';
import { EcontLocationCountryDTO } from '../../models/EcontLocationCountryDTO';
import { EcontLocationCityDTO } from '../../models/EcontLocationCityDTO';
import { EcontLocationQuarterDTO } from '../../models/EcontLocationQuarterDTO';
import { EcontLocationStreetDTO } from '../../models/EcontLocationStreetDTO';
import { EcontLocationOfficeDTO } from '../../models/EcontLocationOfficeDTO';
import { EcontModuleAddressDTO } from '../../models/EcontModuleAddressDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { EcontCountryDTO } from '../../models/EcontCountryDTO';
import { EcontCityDTO } from '../../models/EcontCityDTO';
import { EcontQuarterDTO } from '../../models/EcontQuarterDTO';
import { EcontStreetDTO } from '../../models/EcontStreetDTO';
import { EcontOfficeDTO } from '../../models/EcontOfficeDTO';
import { EcontCreateRequestDTO } from '../../models/EcontCreateRequestDTO';
import { EcontCreateResponseDTO } from '../../models/EcontCreateResponseDTO';
import { EcontSendResponseDTO } from '../../models/EcontSendResponseDTO';
import { EcontCancelRequestDTO } from '../../models/EcontCancelRequestDTO';
import { EcontCancelResponseDTO } from '../../models/EcontCancelResponseDTO';
import { EcontTrackRequestDTO } from '../../models/EcontTrackRequestDTO';
import { EcontTrackResponseDTO } from '../../models/EcontTrackResponseDTO';

export const ShippingsEcontClientProfile = async (dto: EcontAuthenticationCredentialsDTO): Promise<EcontProfilesResponseElement> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/client-profile`,
        method: 'GET',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EcontProfilesResponseElement;
}

export const ShippingsEcontSyncLocations = async (dto: EcontAuthenticationCredentialsDTO): Promise<any> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/sync-locations`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as any;
}

export const ShippingsEcontFetchCountries = async (dto: EcontAuthenticationCredentialsDTO): Promise<EcontLocationCountryDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/fetch/countries`,
        method: 'GET',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EcontLocationCountryDTO[];
}

export const ShippingsEcontFetchCities = async (dto: EcontAuthenticationCredentialsDTO): Promise<EcontLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/fetch/cities`,
        method: 'GET',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EcontLocationCityDTO[];
}

export const ShippingsEcontFetchQuarters = async (dto: EcontAuthenticationCredentialsDTO): Promise<EcontLocationQuarterDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/fetch/quarters`,
        method: 'GET',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EcontLocationQuarterDTO[];
}

export const ShippingsEcontFetchStreets = async (dto: EcontAuthenticationCredentialsDTO): Promise<EcontLocationStreetDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/fetch/streets`,
        method: 'GET',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EcontLocationStreetDTO[];
}

export const ShippingsEcontFetchOffices = async (dto: EcontAuthenticationCredentialsDTO): Promise<EcontLocationOfficeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/fetch/offices`,
        method: 'GET',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EcontLocationOfficeDTO[];
}

export const ShippingsEcontSearchCountry = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationCountryDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/search/country`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EcontLocationCountryDTO[];
}

export const ShippingsEcontSearchCity = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationCityDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/search/city`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EcontLocationCityDTO[];
}

export const ShippingsEcontSearchQuarter = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationQuarterDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/search/quarter`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EcontLocationQuarterDTO[];
}

export const ShippingsEcontSearchStreet = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationStreetDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/search/street`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EcontLocationStreetDTO[];
}

export const ShippingsEcontSearchOffice = async (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationOfficeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/search/office`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as EcontLocationOfficeDTO[];
}

export const ShippingsEcontUpdateShippingAddress = async (orderId: string, shippingId: string, dto: EcontModuleAddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontSetCountry = async (orderId: string, shippingId: string, dto: EcontCountryDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/country`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontUnsetCountry = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/country`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontSetCity = async (orderId: string, shippingId: string, dto: EcontCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontUnsetCity = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontSetQuarter = async (orderId: string, shippingId: string, dto: EcontQuarterDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/quarter`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontUnsetQuarter = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/quarter`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontSetStreet = async (orderId: string, shippingId: string, dto: EcontStreetDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontUnsetStreet = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontSetOffice = async (orderId: string, shippingId: string, dto: EcontOfficeDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontUnsetOffice = async (orderId: string, shippingId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontUpdateDeliveryAddress = async (orderId: string, shippingId: string, deliveryId: string, dto: EcontModuleAddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontSetDeliveryCountry = async (orderId: string, shippingId: string, deliveryId: string, dto: EcontCountryDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/country`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontSetDeliveryCity = async (orderId: string, shippingId: string, deliveryId: string, dto: EcontCityDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/city`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontSetDeliveryQuarter = async (orderId: string, shippingId: string, deliveryId: string, dto: EcontQuarterDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/quarter`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontSetDeliveryStreet = async (orderId: string, shippingId: string, deliveryId: string, dto: EcontStreetDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/street`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontSetDeliveryOffice = async (orderId: string, shippingId: string, deliveryId: string, dto: EcontOfficeDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/office`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const ShippingsEcontCreateRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EcontCreateRequestDTO): Promise<EcontCreateResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/create-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EcontCreateResponseDTO;
}

export const ShippingsEcontSendRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EcontCreateRequestDTO): Promise<EcontSendResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/send-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EcontSendResponseDTO;
}

export const ShippingsEcontCancelRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EcontCancelRequestDTO): Promise<EcontCancelResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/cancel-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EcontCancelResponseDTO;
}

export const ShippingsEcontTrackRequest = async (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EcontTrackRequestDTO): Promise<EcontTrackResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/track-request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as EcontTrackResponseDTO;
}

