import { BaseAPI } from '../../runtime';
import { DiscountCodeDTO } from '../../models/DiscountCodeDTO';
import { DiscountCodeSearchResultDTO } from '../../models/DiscountCodeSearchResultDTO';
import { DiscountCodeFilterResultDTO } from '../../models/DiscountCodeFilterResultDTO';
import { DiscountCodeDraftDTO } from '../../models/DiscountCodeDraftDTO';

export class DiscountCodesAPI extends BaseAPI {
   async import (dto: string[]): Promise<DiscountCodeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as DiscountCodeDTO[];
   }

   async search (query?: { filter?: string, sort?: string, limit?: number, offset?: number, storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<DiscountCodeSearchResultDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as DiscountCodeSearchResultDTO;
   }

   async filter (query?: { filter?: string, sort?: string, limit?: number, offset?: number, storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<DiscountCodeFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as DiscountCodeFilterResultDTO;
   }

   async create (dto: DiscountCodeDraftDTO): Promise<DiscountCodeDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as DiscountCodeDTO;
   }

   async getById (id: string): Promise<DiscountCodeDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as DiscountCodeDTO;
   }

   async update (id: string, dto: DiscountCodeDraftDTO): Promise<DiscountCodeDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as DiscountCodeDTO;
   }

   async delete (id: string): Promise<DiscountCodeDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as DiscountCodeDTO;
   }

}
