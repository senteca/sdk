import { BaseAPI } from '../../runtime';
import { AttributeGroupDraftDTO, AttributeGroupDTO, AttributeGroupFilterResultDTO, AttributeGroupSearchResultDTO, UpdateAttributeGroupDTO, AttributeGroupValueDraftDTO, AttributeGroupValueDTO, AttributeGroupValueMoveDTO } from '../../models';

export class AttributeGroupsAPI extends BaseAPI {
   async create (dto: AttributeGroupDraftDTO): Promise<AttributeGroupDTO> {
       const response = await this._request({
           path: `/merchandise/attribute-groups`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as AttributeGroupDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AttributeGroupFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/attribute-groups`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as AttributeGroupFilterResultDTO;
   }

   async import (dto: AttributeGroupDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/import`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async search (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<AttributeGroupSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as AttributeGroupSearchResultDTO;
   }

   async getByName (name: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AttributeGroupDTO> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/name=${encodeURIComponent(name)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as AttributeGroupDTO;
   }

   async updateByName (name: string, dto: UpdateAttributeGroupDTO): Promise<AttributeGroupDTO> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/name=${encodeURIComponent(name)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as AttributeGroupDTO;
   }

   async deleteByName (name: string): Promise<AttributeGroupDTO> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/name=${encodeURIComponent(name)}`,
           method: 'DELETE',
        });
       return (response as unknown) as AttributeGroupDTO;
   }

   async getById (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AttributeGroupDTO> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as AttributeGroupDTO;
   }

   async updateById (id: string, dto: UpdateAttributeGroupDTO): Promise<AttributeGroupDTO> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as AttributeGroupDTO;
   }

   async deleteById (id: string): Promise<AttributeGroupDTO> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as AttributeGroupDTO;
   }

   async addAttributeGroupValue (id: string, dto: AttributeGroupValueDraftDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/${encodeURIComponent(id)}/value`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async updateAttributeGroupValue (id: string, dto: AttributeGroupValueDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/${encodeURIComponent(id)}/value`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async moveAttributeGroupValue (id: string, dto: AttributeGroupValueMoveDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/${encodeURIComponent(id)}/value/move`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async deleteAttributeGroupValue (id: string, value: string): Promise<void> {
       const response = await this._request({
           path: `/merchandise/attribute-groups/${encodeURIComponent(id)}/value/${encodeURIComponent(value)}`,
           method: 'DELETE',
        });
       
   }

}
