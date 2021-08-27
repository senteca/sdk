import { BaseAPI } from '../../runtime';
import { EcontLocationCountryDTO } from '@models';
import { EcontLocationCityDTO } from '@models';
import { EcontLocationQuarterDTO } from '@models';
import { EcontLocationStreetDTO } from '@models';
import { EcontLocationOfficeDTO } from '@models';
import { EcontCountryDTO } from '@models';
import { OrderDTO } from '@models';
import { EcontCityDTO } from '@models';
import { EcontQuarterDTO } from '@models';
import { EcontStreetDTO } from '@models';
import { EcontOfficeDTO } from '@models';

export class MyShippingsEcontAPI extends BaseAPI {
   async findCountry (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/find-country`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationCountryDTO[];
   }

   async findCity (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/find-city`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationCityDTO[];
   }

   async findQuarter (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/find-quarter`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationQuarterDTO[];
   }

   async findStreet (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/find-street`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationStreetDTO[];
   }

   async findOffice (query?: { language?: string, parent?: string, text?: string, size?: number }): Promise<EcontLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/find-office`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as EcontLocationOfficeDTO[];
   }

   async setCountry (dto: EcontCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/country`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCountry (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/country`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setCity (dto: EcontCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/city`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetCity (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/city`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setQuarter (dto: EcontQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/quarter`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetQuarter (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/quarter`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setStreet (dto: EcontStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/street`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetStreet (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/street`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

   async setOffice (dto: EcontOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/office`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetOffice (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/office`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as OrderDTO;
   }

}
