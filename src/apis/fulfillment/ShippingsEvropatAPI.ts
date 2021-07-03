import { BaseAPI } from '../../runtime';
import { EvropatClientAddressDTO } from '../../models/EvropatClientAddressDTO';
import { EvropatAuthenticationCredentialsDTO } from '../../models/EvropatAuthenticationCredentialsDTO';
import { EvropatLocationCountryDTO } from '../../models/EvropatLocationCountryDTO';
import { EvropatLocationCityDTO } from '../../models/EvropatLocationCityDTO';
import { EvropatLocationQuarterDTO } from '../../models/EvropatLocationQuarterDTO';
import { EvropatLocationStreetDTO } from '../../models/EvropatLocationStreetDTO';
import { EvropatLocationOfficeDTO } from '../../models/EvropatLocationOfficeDTO';
import { EvropatModuleAddressDTO } from '../../models/EvropatModuleAddressDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { EvropatCountryDTO } from '../../models/EvropatCountryDTO';
import { EvropatCityDTO } from '../../models/EvropatCityDTO';
import { EvropatQuarterDTO } from '../../models/EvropatQuarterDTO';
import { EvropatStreetDTO } from '../../models/EvropatStreetDTO';
import { EvropatOfficeDTO } from '../../models/EvropatOfficeDTO';
import { EvropatCreateRequestDTO } from '../../models/EvropatCreateRequestDTO';
import { EvropatCreateResponseDTO } from '../../models/EvropatCreateResponseDTO';
import { EvropatSendRequestDTO } from '../../models/EvropatSendRequestDTO';
import { EvropatSendResponseDTO } from '../../models/EvropatSendResponseDTO';
import { EvropatCancelRequestDTO } from '../../models/EvropatCancelRequestDTO';
import { EvropatCancelResponseDTO } from '../../models/EvropatCancelResponseDTO';
import { EvropatTrackRequestDTO } from '../../models/EvropatTrackRequestDTO';
import { EvropatTrackResponseDTO } from '../../models/EvropatTrackResponseDTO';

export class ShippingsEvropatAPI extends BaseAPI {
   async clientAddresses (query: { clientKey: string }): Promise<EvropatClientAddressDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/client-addresses`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatClientAddressDTO[];
   }

   async syncLocations (dto: EvropatAuthenticationCredentialsDTO): Promise<any> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/sync-locations`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as any;
   }

   async fetchCountries (query: { clientKey: string }): Promise<EvropatLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/fetch/countries`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationCountryDTO[];
   }

   async fetchCities (query: { clientKey: string }): Promise<EvropatLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/fetch/cities`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationCityDTO[];
   }

   async fetchQuarters (query: { clientKey: string }): Promise<EvropatLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/fetch/quarters`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationQuarterDTO[];
   }

   async fetchStreets (query: { clientKey: string }): Promise<EvropatLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/fetch/streets`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationStreetDTO[];
   }

   async fetchOffices (query: { clientKey: string }): Promise<EvropatLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/fetch/offices`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationOfficeDTO[];
   }

   async searchCountry (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/search/country`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationCountryDTO[];
   }

   async searchCity (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/search/city`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationCityDTO[];
   }

   async searchQuarter (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/search/quarter`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationQuarterDTO[];
   }

   async searchStreet (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/search/street`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationStreetDTO[];
   }

   async searchOffice (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/search/office`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationOfficeDTO[];
   }

   async updateShippingAddress (orderId: string, shippingId: string, dto: EvropatModuleAddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCountry (orderId: string, shippingId: string, dto: EvropatCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/country`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCountry (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/country`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setCity (orderId: string, shippingId: string, dto: EvropatCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCity (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setQuarter (orderId: string, shippingId: string, dto: EvropatQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/quarter`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetQuarter (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/quarter`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setStreet (orderId: string, shippingId: string, dto: EvropatStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetStreet (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setOffice (orderId: string, shippingId: string, dto: EvropatOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetOffice (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async updateDeliveryAddress (orderId: string, shippingId: string, deliveryId: string, dto: EvropatModuleAddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryCountry (orderId: string, shippingId: string, deliveryId: string, dto: EvropatCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/country`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryCity (orderId: string, shippingId: string, deliveryId: string, dto: EvropatCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/city`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryQuarter (orderId: string, shippingId: string, deliveryId: string, dto: EvropatQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/quarter`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryStreet (orderId: string, shippingId: string, deliveryId: string, dto: EvropatStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/street`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryOffice (orderId: string, shippingId: string, deliveryId: string, dto: EvropatOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/office`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async createRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EvropatCreateRequestDTO): Promise<EvropatCreateResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/create-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as EvropatCreateResponseDTO;
   }

   async sendRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EvropatSendRequestDTO): Promise<EvropatSendResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/send-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as EvropatSendResponseDTO;
   }

   async cancelRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EvropatCancelRequestDTO): Promise<EvropatCancelResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/cancel-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as EvropatCancelResponseDTO;
   }

   async trackRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EvropatTrackRequestDTO): Promise<EvropatTrackResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/track-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as EvropatTrackResponseDTO;
   }

}
