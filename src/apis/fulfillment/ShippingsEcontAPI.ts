import { BaseAPI } from '../../runtime';
import { EcontProfilesResponseElement } from '@models';
import { EcontAuthenticationCredentialsDTO } from '@models';
import { EcontLocationCountryDTO } from '@models';
import { EcontLocationCityDTO } from '@models';
import { EcontLocationQuarterDTO } from '@models';
import { EcontLocationStreetDTO } from '@models';
import { EcontLocationOfficeDTO } from '@models';
import { EcontModuleAddressDTO } from '@models';
import { OrderDTO } from '@models';
import { EcontCountryDTO } from '@models';
import { EcontCityDTO } from '@models';
import { EcontQuarterDTO } from '@models';
import { EcontStreetDTO } from '@models';
import { EcontOfficeDTO } from '@models';
import { EcontCreateRequestDTO } from '@models';
import { EcontCreateResponseDTO } from '@models';
import { EcontSendResponseDTO } from '@models';
import { EcontCancelRequestDTO } from '@models';
import { EcontCancelResponseDTO } from '@models';
import { EcontTrackRequestDTO } from '@models';
import { EcontTrackResponseDTO } from '@models';

export class ShippingsEcontAPI extends BaseAPI {
   async clientProfile (query: { username: string, password: string }): Promise<EcontProfilesResponseElement> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/client-profile`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontProfilesResponseElement;
   }

   async syncLocations (dto: EcontAuthenticationCredentialsDTO): Promise<any> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/sync-locations`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as any;
   }

   async fetchCountries (query: { username: string, password: string }): Promise<EcontLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/fetch/countries`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationCountryDTO[];
   }

   async fetchCities (query: { username: string, password: string }): Promise<EcontLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/fetch/cities`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationCityDTO[];
   }

   async fetchQuarters (query: { username: string, password: string }): Promise<EcontLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/fetch/quarters`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationQuarterDTO[];
   }

   async fetchStreets (query: { username: string, password: string }): Promise<EcontLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/fetch/streets`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationStreetDTO[];
   }

   async fetchOffices (query: { username: string, password: string }): Promise<EcontLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/fetch/offices`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationOfficeDTO[];
   }

   async searchCountry (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/search/country`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationCountryDTO[];
   }

   async searchCity (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/search/city`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationCityDTO[];
   }

   async searchQuarter (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/search/quarter`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationQuarterDTO[];
   }

   async searchStreet (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/search/street`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationStreetDTO[];
   }

   async searchOffice (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/search/office`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationOfficeDTO[];
   }

   async updateShippingAddress (orderId: string, shippingId: string, dto: EcontModuleAddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCountry (orderId: string, shippingId: string, dto: EcontCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/country`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCountry (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/country`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setCity (orderId: string, shippingId: string, dto: EcontCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCity (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setQuarter (orderId: string, shippingId: string, dto: EcontQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/quarter`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetQuarter (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/quarter`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setStreet (orderId: string, shippingId: string, dto: EcontStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetStreet (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setOffice (orderId: string, shippingId: string, dto: EcontOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetOffice (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async updateDeliveryAddress (orderId: string, shippingId: string, deliveryId: string, dto: EcontModuleAddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryCountry (orderId: string, shippingId: string, deliveryId: string, dto: EcontCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/country`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryCity (orderId: string, shippingId: string, deliveryId: string, dto: EcontCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/city`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryQuarter (orderId: string, shippingId: string, deliveryId: string, dto: EcontQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/quarter`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryStreet (orderId: string, shippingId: string, deliveryId: string, dto: EcontStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/street`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryOffice (orderId: string, shippingId: string, deliveryId: string, dto: EcontOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/office`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async createRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EcontCreateRequestDTO): Promise<EcontCreateResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/create-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as EcontCreateResponseDTO;
   }

   async sendRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EcontCreateRequestDTO): Promise<EcontSendResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/send-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as EcontSendResponseDTO;
   }

   async cancelRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EcontCancelRequestDTO): Promise<EcontCancelResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/cancel-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as EcontCancelResponseDTO;
   }

   async trackRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: EcontTrackRequestDTO): Promise<EcontTrackResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/econt/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/track-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as EcontTrackResponseDTO;
   }

}
