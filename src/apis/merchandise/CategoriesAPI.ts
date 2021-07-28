import { BaseAPI } from '../../runtime';
import { CategoryDraftDTO } from '../../models/CategoryDraftDTO';
import { CategoryDTO } from '../../models/CategoryDTO';
import { CategoryFilterResultDTO } from '../../models/CategoryFilterResultDTO';
import { CategoryImportDraftDTO } from '../../models/CategoryImportDraftDTO';
import { CategorySearchResultDTO } from '../../models/CategorySearchResultDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';

export class CategoriesAPI extends BaseAPI {
   async create (dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CategoryDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CategoryFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/categories`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CategoryFilterResultDTO;
   }

   async import (dto: CategoryImportDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/categories/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async search (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<CategorySearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/categories/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CategorySearchResultDTO;
   }

   async getBySlug (slug: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/slug=${encodeURIComponent(slug)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CategoryDTO;
   }

   async getByExternalId (externalId: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/externalId=${encodeURIComponent(externalId)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CategoryDTO;
   }

   async updateByExternalId (externalId: string, dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/externalId=${encodeURIComponent(externalId)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CategoryDTO;
   }

   async deleteByExternalId (externalId: string): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/externalId=${encodeURIComponent(externalId)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as CategoryDTO;
   }

   async getById (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CategoryDTO;
   }

   async updateById (id: string, dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CategoryDTO;
   }

   async deleteById (id: string): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as CategoryDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async setAddonData (id: string, dto: string[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}/addon-data`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

}
