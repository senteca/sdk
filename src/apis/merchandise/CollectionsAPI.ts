import { BaseAPI } from '../../runtime';
import { CollectionDraftDTO, CollectionDTO, CollectionFilterResultDTO, CollectionSearchResultDTO, SetCustomFieldDTO } from '../../models';

export class CollectionsAPI extends BaseAPI {
   async create (dto: CollectionDraftDTO): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CollectionDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CollectionFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/collections`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CollectionFilterResultDTO;
   }

   async import (dto: CollectionDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/collections/import`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async search (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<CollectionSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/collections/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CollectionSearchResultDTO;
   }

   async getBySlug (slug: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, unscopedFields?: string[] }): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/slug=${encodeURIComponent(slug)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CollectionDTO;
   }

   async getByExternalId (externalId: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/externalId=${encodeURIComponent(externalId)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CollectionDTO;
   }

   async updateByExternalId (externalId: string, dto: CollectionDraftDTO): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/externalId=${encodeURIComponent(externalId)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CollectionDTO;
   }

   async deleteByExternalId (externalId: string): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/externalId=${encodeURIComponent(externalId)}`,
           method: 'DELETE',
        });
       return (response as unknown) as CollectionDTO;
   }

   async getById (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CollectionDTO;
   }

   async updateById (id: string, dto: CollectionDraftDTO): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CollectionDTO;
   }

   async deleteById (id: string): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as CollectionDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/collections/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

}
