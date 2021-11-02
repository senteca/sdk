import { BaseAPI } from '../../runtime';
import { EvropatClientAddressDTO, EvropatAuthenticationCredentialsDTO, EvropatLocationCityDTO, EvropatLocationOfficeDTO, EvropatModuleAddressDTO, OrderDTO, EvropatCityDTO, EvropatOfficeDTO, EvropatCreateRequestDTO, EvropatCreateResponseDTO, EvropatSendRequestDTO, EvropatSendResponseDTO, EvropatCancelRequestDTO, EvropatCancelResponseDTO, EvropatTrackRequestDTO, EvropatTrackResponseDTO } from '../../models';

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

   async fetchCities (query: { clientKey: string }): Promise<EvropatLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/fetch/cities`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as EvropatLocationCityDTO[];
   }

   async fetchOffices (query: { clientKey: string }): Promise<EvropatLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/fetch/offices`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as EvropatLocationOfficeDTO[];
   }

   async searchCity (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/search/city`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as EvropatLocationCityDTO[];
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

   async setDeliveryCity (orderId: string, shippingId: string, deliveryId: string, dto: EvropatCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/address/city`,
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

   async getTrackingData (waybill: string): Promise<EvropatSendResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/evropat/${encodeURIComponent(waybill)}/tracking-data`,
           method: 'GET',
        });
       return (response as unknown) as EvropatSendResponseDTO;
   }

}
