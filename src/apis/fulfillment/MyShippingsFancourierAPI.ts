import { BaseAPI } from '../../runtime';
import { FancourierLocationCityDTO } from '../../models/FancourierLocationCityDTO';
import { FancourierLocationStreetDTO } from '../../models/FancourierLocationStreetDTO';
import { FancourierCityDTO } from '../../models/FancourierCityDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { FancourierStreetDTO } from '../../models/FancourierStreetDTO';

export class MyShippingsFancourierAPI extends BaseAPI {
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
