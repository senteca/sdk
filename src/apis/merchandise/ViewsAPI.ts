import { BaseAPI } from '../../runtime';
import { ViewDraftDTO } from '../../models/ViewDraftDTO';
import { ViewDTO } from '../../models/ViewDTO';
import { ViewFilterResultDTO } from '../../models/ViewFilterResultDTO';
import { ViewSearchResultDTO } from '../../models/ViewSearchResultDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';

export class ViewsAPI extends BaseAPI {
   async create (dto: ViewDraftDTO): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ViewFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/views`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ViewFilterResultDTO;
   }

   async import (dto: ViewDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/views/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async search (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<ViewSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/views/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ViewSearchResultDTO;
   }

   async getBySlug (slug: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/slug=${encodeURIComponent(slug)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async getById (id: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async updateById (id: string, dto: ViewDraftDTO): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async deleteById (id: string): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ViewDTO;
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
