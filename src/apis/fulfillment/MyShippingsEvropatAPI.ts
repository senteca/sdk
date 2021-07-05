import { BaseAPI } from '../../runtime';
import { EvropatLocationCityDTO } from '../../models/EvropatLocationCityDTO';
import { EvropatLocationOfficeDTO } from '../../models/EvropatLocationOfficeDTO';
import { EvropatCityDTO } from '../../models/EvropatCityDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { EvropatOfficeDTO } from '../../models/EvropatOfficeDTO';

export class MyShippingsEvropatAPI extends BaseAPI {
   async findCity (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/find-city`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationCityDTO[];
   }

   async findOffice (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/find-office`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationOfficeDTO[];
   }

   async setCity (dto: EvropatCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/city`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCity (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/city`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setOffice (dto: EvropatOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/office`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetOffice (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/office`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

}
