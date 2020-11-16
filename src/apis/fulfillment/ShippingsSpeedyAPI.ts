import { BaseAPI } from '../../runtime';
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
import { SpeedySendRequestDTO } from '../../models/SpeedySendRequestDTO';
import { SpeedySendResponseDTO } from '../../models/SpeedySendResponseDTO';
import { SpeedyCancelRequestDTO } from '../../models/SpeedyCancelRequestDTO';
import { SpeedyCancelResponseDTO } from '../../models/SpeedyCancelResponseDTO';
import { SpeedyTrackRequestDTO } from '../../models/SpeedyTrackRequestDTO';
import { SpeedyTrackResponseDTO } from '../../models/SpeedyTrackResponseDTO';

export class ShippingsSpeedyAPI extends BaseAPI {
   async syncLocations (dto: SpeedyAuthenticationCredentialsDTO): Promise<any> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/sync-locations`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as any;
   }

   async fetchCountries (dto: SpeedyAuthenticationCredentialsDTO): Promise<SpeedyLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/fetch/countries`,
           method: 'GET',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SpeedyLocationCountryDTO[];
   }

   async fetchCities (dto: SpeedyAuthenticationCredentialsDTO): Promise<SpeedyLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/fetch/cities`,
           method: 'GET',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SpeedyLocationCityDTO[];
   }

   async fetchQuarters (dto: SpeedyAuthenticationCredentialsDTO): Promise<SpeedyLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/fetch/quarters`,
           method: 'GET',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SpeedyLocationQuarterDTO[];
   }

   async fetchStreets (dto: SpeedyAuthenticationCredentialsDTO): Promise<SpeedyLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/fetch/streets`,
           method: 'GET',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SpeedyLocationStreetDTO[];
   }

   async fetchOffices (dto: SpeedyAuthenticationCredentialsDTO): Promise<SpeedyLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/fetch/offices`,
           method: 'GET',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SpeedyLocationOfficeDTO[];
   }

   async searchCountry (query: { language?: string, parent?: string, text: string, maxResults?: number }): Promise<SpeedyLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/search/country`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as SpeedyLocationCountryDTO[];
   }

   async searchCity (query: { language?: string, parent?: string, text: string, maxResults?: number }): Promise<SpeedyLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/search/city`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as SpeedyLocationCityDTO[];
   }

   async searchQuarter (query: { language?: string, parent?: string, text: string, maxResults?: number }): Promise<SpeedyLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/search/quarter`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as SpeedyLocationQuarterDTO[];
   }

   async searchStreet (query: { language?: string, parent?: string, text: string, maxResults?: number }): Promise<SpeedyLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/search/street`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as SpeedyLocationStreetDTO[];
   }

   async searchOffice (query: { language?: string, parent?: string, text: string, maxResults?: number }): Promise<SpeedyLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/search/office`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as SpeedyLocationOfficeDTO[];
   }

   async updateShippingAddress (orderId: string, shippingId: string, dto: SpeedyModuleAddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setCountry (orderId: string, shippingId: string, dto: SpeedyCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/country`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setCity (orderId: string, shippingId: string, dto: SpeedyCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setQuarter (orderId: string, shippingId: string, dto: SpeedyQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/quarter`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setStreet (orderId: string, shippingId: string, dto: SpeedyStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setOffice (orderId: string, shippingId: string, dto: SpeedyOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async updateDeliveryAddress (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyModuleAddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setDeliveryCountry (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/country`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setDeliveryCity (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/city`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setDeliveryQuarter (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/quarter`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setDeliveryStreet (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/street`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setDeliveryOffice (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/office`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async createRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedyCreateRequestDTO): Promise<SpeedyCreateResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/create-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SpeedyCreateResponseDTO;
   }

   async sendRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedySendRequestDTO): Promise<SpeedySendResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/send-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SpeedySendResponseDTO;
   }

   async cancelRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedyCancelRequestDTO): Promise<SpeedyCancelResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/cancel-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SpeedyCancelResponseDTO;
   }

   async trackRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedyTrackRequestDTO): Promise<SpeedyTrackResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/track-request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SpeedyTrackResponseDTO;
   }

}
