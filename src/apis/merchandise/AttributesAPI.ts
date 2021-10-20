import { BaseAPI } from '../../runtime';
import { AttributeDraftDTO, AttributeDTO, AttributeFilterResultDTO, AttributeSearchResultDTO, UpdateAttributeDTO, AttributeValueDraftDTO, AttributeValueDTO, AttributeValueMoveDTO } from '../../models';

export class AttributesAPI extends BaseAPI {
   async create (dto: AttributeDraftDTO): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as AttributeDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AttributeFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/attributes`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as AttributeFilterResultDTO;
   }

   async import (dto: AttributeDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/attributes/import`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async search (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<AttributeSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as AttributeSearchResultDTO;
   }

   async getByName (name: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/name=${encodeURIComponent(name)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as AttributeDTO;
   }

   async updateByName (name: string, dto: UpdateAttributeDTO): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/name=${encodeURIComponent(name)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as AttributeDTO;
   }

   async deleteByName (name: string): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/name=${encodeURIComponent(name)}`,
           method: 'DELETE',
        });
       return (response as unknown) as AttributeDTO;
   }

   async getById (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as AttributeDTO;
   }

   async updateById (id: string, dto: UpdateAttributeDTO): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as AttributeDTO;
   }

   async deleteById (id: string): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as AttributeDTO;
   }

   async addAttributeValue (id: string, dto: AttributeValueDraftDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/attributes/${encodeURIComponent(id)}/value`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async updateAttributeValue (id: string, dto: AttributeValueDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/attributes/${encodeURIComponent(id)}/value`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async moveAttributeValue (id: string, dto: AttributeValueMoveDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/attributes/${encodeURIComponent(id)}/value/move`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async deleteAttributeValue (id: string, value: string): Promise<void> {
       const response = await this._request({
           path: `/merchandise/attributes/${encodeURIComponent(id)}/value/${encodeURIComponent(value)}`,
           method: 'DELETE',
        });
       
   }

}
