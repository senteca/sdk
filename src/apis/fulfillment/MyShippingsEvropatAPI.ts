import { BaseAPI } from '../../runtime';
import { EvropatLocationCountryDTO } from '../../models/EvropatLocationCountryDTO';
import { EvropatLocationCityDTO } from '../../models/EvropatLocationCityDTO';
import { EvropatLocationQuarterDTO } from '../../models/EvropatLocationQuarterDTO';
import { EvropatLocationStreetDTO } from '../../models/EvropatLocationStreetDTO';
import { EvropatLocationOfficeDTO } from '../../models/EvropatLocationOfficeDTO';
import { EvropatCountryDTO } from '../../models/EvropatCountryDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { EvropatCityDTO } from '../../models/EvropatCityDTO';
import { EvropatQuarterDTO } from '../../models/EvropatQuarterDTO';
import { EvropatStreetDTO } from '../../models/EvropatStreetDTO';
import { EvropatOfficeDTO } from '../../models/EvropatOfficeDTO';

export class MyShippingsEvropatAPI extends BaseAPI {
   async findCountry (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/find-country`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationCountryDTO[];
   }

   async findCity (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/find-city`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationCityDTO[];
   }

   async findQuarter (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/find-quarter`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationQuarterDTO[];
   }

   async findStreet (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/find-street`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationStreetDTO[];
   }

   async findOffice (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EvropatLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/find-office`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EvropatLocationOfficeDTO[];
   }

   async setCountry (dto: EvropatCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/country`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCountry (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/country`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
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

   async setQuarter (dto: EvropatQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/quarter`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetQuarter (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/quarter`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setStreet (dto: EvropatStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/street`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetStreet (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/evropat/street`,
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
