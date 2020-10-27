import { BaseAPI } from '../../runtime';
import { AssetDTO } from '../../models/AssetDTO';
import { BrandDTO } from '../../models/BrandDTO';
import { BrandSearchResultDTO } from '../../models/BrandSearchResultDTO';
import { BrandFilterResultDTO } from '../../models/BrandFilterResultDTO';
import { BrandDraftDTO } from '../../models/BrandDraftDTO';
import { BrandStatusUpdateDTO } from '../../models/BrandStatusUpdateDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';

export class BrandsAPI extends BaseAPI {
   async createAsset (id: string, dto: AssetDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}/assets`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async updateAssetByIndex (id: string, index: number, dto: AssetDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}/assets/index=${encodeURIComponent(index)}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async deleteAssetByIndex (id: string, index: number): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}/assets/index=${encodeURIComponent(index)}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async search (query: { language: string, term: string, expand?: string, limit?: number, offset?: number }): Promise<BrandSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/brands/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as BrandSearchResultDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<BrandFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/brands`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as BrandFilterResultDTO;
   }

   async create (dto: BrandDraftDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async getSlugs (lang: string): Promise<string[]> {
       const response = await this._request({
           path: `/merchandise/brands/slugs/lang=${encodeURIComponent(lang)}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as string[];
   }

   async getById (id: string, query?: { statuses?: string[], expand?: string }): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async update (id: string, dto: BrandDraftDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async delete (id: string): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async getByExternalId (externalId: string, query?: { statuses?: string[], expand?: string }): Promise<BrandDTO> {
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

   async getBySlug (slug: string, lang: string, query?: { statuses?: string[], expand?: string }): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/slug=${encodeURIComponent(slug)}/lang=${encodeURIComponent(lang)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async setStatus (id: string, dto: BrandStatusUpdateDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}/status`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async import (dto: BrandDraftDTO[]): Promise<BrandDTO[]> {
       const response = await this._request({
           path: `/merchandise/brands/import`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as BrandDTO[];
   }

}
