import { BaseAPI } from '../../runtime';
import { ViewDraftDTO, ViewDTO, ViewFilterResultDTO, ViewSearchResultDTO, SetCustomFieldDTO } from '../../models';

export class ViewsAPI extends BaseAPI {
   async create (dto: ViewDraftDTO): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ViewDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ViewFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/views`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ViewFilterResultDTO;
   }

   async import (dto: ViewDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/views/import`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async search (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<ViewSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/views/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ViewSearchResultDTO;
   }

   async getByTag (tag: string): Promise<ViewFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/views/tag=${encodeURIComponent(tag)}`,
           method: 'GET',
        });
       return (response as unknown) as ViewFilterResultDTO;
   }

   async getBySlug (slug: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/slug=${encodeURIComponent(slug)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ViewDTO;
   }

   async getByKey (key: string): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/key=${encodeURIComponent(key)}`,
           method: 'GET',
        });
       return (response as unknown) as ViewDTO;
   }

   async getById (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ViewDTO;
   }

   async updateById (id: string, dto: ViewDraftDTO): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ViewDTO;
   }

   async deleteById (id: string): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as ViewDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/views/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

}
