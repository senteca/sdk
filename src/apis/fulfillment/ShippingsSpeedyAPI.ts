import { BaseAPI } from '../../runtime';
import { SpeedyClientsDetailsDTO, SpeedyAuthenticationCredentialsDTO, SpeedyLocationCountryDTO, SpeedyLocationCityDTO, SpeedyLocationQuarterDTO, SpeedyLocationStreetDTO, SpeedyLocationOfficeDTO, SpeedyModuleAddressDTO, OrderDTO, SpeedyCountryDTO, SpeedyCityDTO, SpeedyQuarterDTO, SpeedyStreetDTO, SpeedyOfficeDTO, SpeedyCreateRequestDTO, SpeedyCreateResponseDTO, SpeedySendResponseDTO, SpeedyCancelRequestDTO, SpeedyTrackRequestDTO, SpeedyTrackResponseDTO } from '../../models';

export class ShippingsSpeedyAPI extends BaseAPI {
   async clientDetails (query: { username: string, password: string }): Promise<SpeedyClientsDetailsDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/client-details`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyClientsDetailsDTO;
   }

   async syncLocations (dto: SpeedyAuthenticationCredentialsDTO): Promise<any> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/sync-locations`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as any;
   }

   async fetchCountries (query: { username: string, password: string }): Promise<SpeedyLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/fetch/countries`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationCountryDTO[];
   }

   async fetchCities (query: { username: string, password: string }): Promise<SpeedyLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/fetch/cities`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationCityDTO[];
   }

   async fetchQuarters (query: { username: string, password: string }): Promise<SpeedyLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/fetch/quarters`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationQuarterDTO[];
   }

   async fetchStreets (query: { username: string, password: string }): Promise<SpeedyLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/fetch/streets`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationStreetDTO[];
   }

   async fetchOffices (query: { username: string, password: string }): Promise<SpeedyLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/fetch/offices`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationOfficeDTO[];
   }

   async searchCountry (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/search/country`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationCountryDTO[];
   }

   async searchCity (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/search/city`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationCityDTO[];
   }

   async searchQuarter (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/search/quarter`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationQuarterDTO[];
   }

   async searchStreet (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/search/street`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationStreetDTO[];
   }

   async searchOffice (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<SpeedyLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/search/office`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SpeedyLocationOfficeDTO[];
   }

   async updateShippingAddress (orderId: string, shippingId: string, dto: SpeedyModuleAddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCountry (orderId: string, shippingId: string, dto: SpeedyCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/country`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCountry (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/country`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCity (orderId: string, shippingId: string, dto: SpeedyCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCity (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setQuarter (orderId: string, shippingId: string, dto: SpeedyQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/quarter`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetQuarter (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/quarter`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setStreet (orderId: string, shippingId: string, dto: SpeedyStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetStreet (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setOffice (orderId: string, shippingId: string, dto: SpeedyOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetOffice (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/office`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async updateDeliveryAddress (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyModuleAddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryCountry (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/country`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryCity (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/city`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryQuarter (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/quarter`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryStreet (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/street`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryOffice (orderId: string, shippingId: string, deliveryId: string, dto: SpeedyOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/office`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async createRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedyCreateRequestDTO): Promise<SpeedyCreateResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/create-request`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as SpeedyCreateResponseDTO;
   }

   async sendRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedyCreateRequestDTO): Promise<SpeedySendResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/send-request`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as SpeedySendResponseDTO;
   }

   async cancelRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedyCancelRequestDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/cancel-request`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async trackRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: SpeedyTrackRequestDTO): Promise<SpeedyTrackResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/speedy/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/track-request`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as SpeedyTrackResponseDTO;
   }

}
