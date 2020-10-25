import { BaseAPI } from '../../runtime';
import { AttributeSearchResultDTO } from '../../models/AttributeSearchResultDTO';
import { AttributeFilterResultDTO } from '../../models/AttributeFilterResultDTO';
import { AttributeDraftDTO } from '../../models/AttributeDraftDTO';
import { AttributeDTO } from '../../models/AttributeDTO';

export class AttributesAPI extends BaseAPI {
   async search (query: { language: string, term: string, expand?: string, limit?: number, offset?: number }): Promise<AttributeSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as AttributeSearchResultDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<AttributeFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/attributes`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as AttributeFilterResultDTO;
   }

   async create (dto: AttributeDraftDTO): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as AttributeDTO;
   }

   async getById (id: string): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as AttributeDTO;
   }

   async update (id: string, dto: AttributeDraftDTO): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as AttributeDTO;
   }

   async delete (id: string): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as AttributeDTO;
   }

   async import (dto: AttributeDraftDTO[]): Promise<AttributeDTO[]> {
       const response = await this._request({
           path: `/merchandise/attributes/import`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as AttributeDTO[];
   }

   async updateByName (name: string, dto: AttributeDraftDTO): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/name=${name}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as AttributeDTO;
   }

   async deleteByName (name: string): Promise<AttributeDTO> {
       const response = await this._request({
           path: `/merchandise/attributes/name=${name}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as AttributeDTO;
   }

}
