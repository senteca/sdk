import { BaseAPI } from '../../runtime';
import { EcontLocationCountryDTO } from '../../models/EcontLocationCountryDTO';
import { EcontLocationCityDTO } from '../../models/EcontLocationCityDTO';
import { EcontLocationQuarterDTO } from '../../models/EcontLocationQuarterDTO';
import { EcontLocationStreetDTO } from '../../models/EcontLocationStreetDTO';
import { EcontLocationOfficeDTO } from '../../models/EcontLocationOfficeDTO';
import { EcontCountryDTO } from '../../models/EcontCountryDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { EcontCityDTO } from '../../models/EcontCityDTO';
import { EcontQuarterDTO } from '../../models/EcontQuarterDTO';
import { EcontStreetDTO } from '../../models/EcontStreetDTO';
import { EcontOfficeDTO } from '../../models/EcontOfficeDTO';

export class MyShippingsEcontAPI extends BaseAPI {
   async findCountry (query: { language?: string, parent?: string, text: string, maxResults?: number }): Promise<EcontLocationCountryDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/find-country`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as EcontLocationCountryDTO[];
   }

   async findCity (query: { language?: string, parent?: string, text: string, maxResults?: number }): Promise<EcontLocationCityDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/find-city`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as EcontLocationCityDTO[];
   }

   async findQuarter (query: { language?: string, parent?: string, text: string, maxResults?: number }): Promise<EcontLocationQuarterDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/find-quarter`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as EcontLocationQuarterDTO[];
   }

   async findStreet (query: { language?: string, parent?: string, text: string, maxResults?: number }): Promise<EcontLocationStreetDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/find-street`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as EcontLocationStreetDTO[];
   }

   async findOffice (query: { language?: string, parent?: string, text: string, maxResults?: number }): Promise<EcontLocationOfficeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/find-office`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as EcontLocationOfficeDTO[];
   }

   async setCountry (dto: EcontCountryDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/country`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setCity (dto: EcontCityDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/city`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setQuarter (dto: EcontQuarterDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/quarter`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setStreet (dto: EcontStreetDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/street`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setOffice (dto: EcontOfficeDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/econt/office`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

}
