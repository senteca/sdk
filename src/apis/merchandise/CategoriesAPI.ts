import { BaseAPI } from '../../runtime';
import { AssetDTO } from '../../models/AssetDTO';
import { CategoryDTO } from '../../models/CategoryDTO';
import { CategorySearchResultDTO } from '../../models/CategorySearchResultDTO';
import { CategoryFilterResultDTO } from '../../models/CategoryFilterResultDTO';
import { CategoryDraftDTO } from '../../models/CategoryDraftDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';

export class CategoriesAPI extends BaseAPI {
   async createAsset (id: string, dto: AssetDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}/assets`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async updateAssetByIndex (id: string, index: number, dto: AssetDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}/assets/index=${encodeURIComponent(index)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async deleteAssetByIndex (id: string, index: number): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}/assets/index=${encodeURIComponent(index)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async search (query: { language: string, term: string, expand?: string, limit?: number, offset?: number }): Promise<CategorySearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/categories/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CategorySearchResultDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<CategoryFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/categories`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CategoryFilterResultDTO;
   }

   async create (dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async getSlugs (lang: string): Promise<string[]> {
       const response = await this._request({
           path: `/merchandise/categories/slugs/lang=${encodeURIComponent(lang)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as string[];
   }

   async getById (id: string, query?: { statuses?: string[], expand?: string }): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async update (id: string, dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async delete (id: string): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async getByExternalId (externalId: string, query?: { statuses?: string[], expand?: string }): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/externalId=${encodeURIComponent(externalId)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async updateByExternalId (externalId: string, dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/externalId=${encodeURIComponent(externalId)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async deleteByExternalId (externalId: string): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/externalId=${encodeURIComponent(externalId)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async getBySlug (slug: string, lang: string, query?: { statuses?: string[], expand?: string }): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/slug=${encodeURIComponent(slug)}/lang=${encodeURIComponent(lang)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<CategoryDTO> {
       const response = await this._request({
           path: `/merchandise/categories/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async import (dto: CategoryDraftDTO[]): Promise<CategoryDTO[]> {
       const response = await this._request({
           path: `/merchandise/categories/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CategoryDTO[];
   }

}
