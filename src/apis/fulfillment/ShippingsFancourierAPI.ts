import { BaseAPI } from '../../runtime';
import { FancourierAuthenticationCredentialsDTO, FancourierLocationRegionDTO, FancourierLocationCityDTO, FancourierLocationStreetDTO, FancourierModuleAddressDTO, OrderDTO, FancourierRegionDTO, FancourierCityDTO, FancourierStreetDTO, FancourierCreateRequestDTO, FancourierCreateResponseDTO, FancourierSendResponseDTO, FancourierCancelRequestDTO, FancourierTrackRequestDTO, FancourierTrackResponseDTO } from '../../models';

export class ShippingsFancourierAPI extends BaseAPI {
   async syncLocations (dto: FancourierAuthenticationCredentialsDTO): Promise<any> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/sync-locations`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as any;
   }

   async fetchRegions (query: { username: string, user_pass: string, client_id: string, language: string }): Promise<FancourierLocationRegionDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/fetch/regions`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as FancourierLocationRegionDTO[];
   }

   async fetchCities (query: { username: string, user_pass: string, client_id: string, language: string }): Promise<FancourierLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/fetch/cities`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as FancourierLocationCityDTO[];
   }

   async fetchStreets (query: { username: string, user_pass: string, client_id: string, language: string }): Promise<FancourierLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/fetch/streets`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as FancourierLocationStreetDTO[];
   }

   async searchRegion (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<FancourierLocationRegionDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/search/region`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as FancourierLocationRegionDTO[];
   }

   async searchCity (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<FancourierLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/search/city`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as FancourierLocationCityDTO[];
   }

   async searchStreet (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<FancourierLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/search/street`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as FancourierLocationStreetDTO[];
   }

   async updateShippingAddress (orderId: string, shippingId: string, dto: FancourierModuleAddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setRegion (orderId: string, shippingId: string, dto: FancourierRegionDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/region`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCity (orderId: string, shippingId: string, dto: FancourierCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCity (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/city`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setStreet (orderId: string, shippingId: string, dto: FancourierStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetStreet (orderId: string, shippingId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/address/street`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async updateDeliveryAddress (orderId: string, shippingId: string, deliveryId: string, dto: FancourierModuleAddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryCity (orderId: string, shippingId: string, deliveryId: string, dto: FancourierCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/city`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDeliveryStreet (orderId: string, shippingId: string, deliveryId: string, dto: FancourierStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/street`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async createRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: FancourierCreateRequestDTO): Promise<FancourierCreateResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/create-request`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as FancourierCreateResponseDTO;
   }

   async sendRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: FancourierCreateRequestDTO): Promise<FancourierSendResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/send-request`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as FancourierSendResponseDTO;
   }

   async cancelRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: FancourierCancelRequestDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/cancel-request`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async trackRequest (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: FancourierTrackRequestDTO): Promise<FancourierTrackResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/track-request`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as FancourierTrackResponseDTO;
   }

   async getTrackingData (waybill: string): Promise<FancourierSendResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/fancourier/${encodeURIComponent(waybill)}/tracking-data`,
           method: 'GET',
        });
       return (response as unknown) as FancourierSendResponseDTO;
   }

}
