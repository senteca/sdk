import { BaseAPI } from '../../runtime';
import { BrandDraftDTO } from '../../models/BrandDraftDTO';
import { BrandDTO } from '../../models/BrandDTO';
import { BrandFilterResultDTO } from '../../models/BrandFilterResultDTO';
import { BrandImportDraftDTO } from '../../models/BrandImportDraftDTO';
import { BrandSearchResultDTO } from '../../models/BrandSearchResultDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';

export class BrandsAPI extends BaseAPI {
   async create (dto: BrandDraftDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async filter (query?: { filter?: string, sort?: string, limit?: number, offset?: number, storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<BrandFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/brands`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as BrandFilterResultDTO;
   }

   async import (dto: BrandImportDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/brands/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as void;
   }

   async search (query?: { sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string, storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<BrandSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/brands/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as BrandSearchResultDTO;
   }

   async getById (id: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async updateById (id: string, dto: BrandDraftDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async deleteById (id: string): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async getBySlug (slug: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/slug=${encodeURIComponent(slug)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async getByExternalId (externalId: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/externalId=${encodeURIComponent(externalId)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async updateByExternalId (externalId: string, dto: BrandDraftDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/externalId=${encodeURIComponent(externalId)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async deleteByExternalId (externalId: string): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/externalId=${encodeURIComponent(externalId)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async setCustomById (id: string, dto: SetCustomFieldDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as void;
   }

}
