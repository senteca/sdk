import { BaseAPI } from '../../runtime';
import { FancourierLocationRegionDTO, FancourierLocationCityDTO, FancourierLocationStreetDTO, FancourierRegionDTO, OrderDTO, FancourierCityDTO, FancourierStreetDTO } from '../../models';

export class MyShippingsFancourierAPI extends BaseAPI {
   async findRegion (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<FancourierLocationRegionDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/fancourier/find-region`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as FancourierLocationRegionDTO[];
   }

   async findCity (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<FancourierLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/fancourier/find-city`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as FancourierLocationCityDTO[];
   }

   async findStreet (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<FancourierLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/fancourier/find-street`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as FancourierLocationStreetDTO[];
   }

   async setRegion (dto: FancourierRegionDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/fancourier/region`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetRegion (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/fancourier/region`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCity (dto: FancourierCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/fancourier/city`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCity (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/fancourier/city`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setStreet (dto: FancourierStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/fancourier/street`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetStreet (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/fancourier/street`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

}
