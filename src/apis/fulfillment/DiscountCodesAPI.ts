import { BaseAPI } from '../../runtime';
import { DiscountCodeDTO } from '../../models/DiscountCodeDTO';
import { DiscountCodeSearchResultDTO } from '../../models/DiscountCodeSearchResultDTO';
import { DiscountCodeFilterResultDTO } from '../../models/DiscountCodeFilterResultDTO';
import { DiscountCodeDraftDTO } from '../../models/DiscountCodeDraftDTO';
import { DiscountCodeBulkCreateDTO } from '../../models/DiscountCodeBulkCreateDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';
import { DiscountCodeBulkDeleteDTO } from '../../models/DiscountCodeBulkDeleteDTO';
import { FilterQueryDTO } from '../../models/FilterQueryDTO';
import { DiscountCodeBulkSetIsActiveDTO } from '../../models/DiscountCodeBulkSetIsActiveDTO';
import { DiscountCodeBulkSetValidRangeDTO } from '../../models/DiscountCodeBulkSetValidRangeDTO';

export class DiscountCodesAPI extends BaseAPI {
   async import (dto: string[]): Promise<DiscountCodeDTO[]> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as DiscountCodeDTO[];
   }

   async getPublic (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<DiscountCodeSearchResultDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/public`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as DiscountCodeSearchResultDTO;
   }

   async search (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<DiscountCodeSearchResultDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as DiscountCodeSearchResultDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<DiscountCodeFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as DiscountCodeFilterResultDTO;
   }

   async create (dto: DiscountCodeDraftDTO): Promise<DiscountCodeDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as DiscountCodeDTO;
   }

   async getById (id: string): Promise<DiscountCodeDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as DiscountCodeDTO;
   }

   async update (id: string, dto: DiscountCodeDraftDTO): Promise<DiscountCodeDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as DiscountCodeDTO;
   }

   async delete (id: string): Promise<DiscountCodeDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as DiscountCodeDTO;
   }

   async createBulk (dto: DiscountCodeBulkCreateDTO): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/bulk`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async bulkDelete (dto: DiscountCodeBulkDeleteDTO): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/bulk/delete`,
           method: 'DELETE',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async exportToCSV (dto: FilterQueryDTO): Promise<any> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/export/csv`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as any;
   }

   async bulkSetIsActive (dto: DiscountCodeBulkSetIsActiveDTO): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/bulk/active`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async bulkSetValidRange (dto: DiscountCodeBulkSetValidRangeDTO): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/discount-codes/bulk/valid`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

}
