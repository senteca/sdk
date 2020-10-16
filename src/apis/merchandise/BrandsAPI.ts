import { BaseAPI } from '../../runtime';
import { AssetDTO } from '../../models/AssetDTO';
import { BrandDTO } from '../../models/BrandDTO';
import { BrandDraftDTO } from '../../models/BrandDraftDTO';
import { BrandStatusUpdateDTO } from '../../models/BrandStatusUpdateDTO';

export class BrandsAPI extends BaseAPI {
   async createAsset (id: string, dto: AssetDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${id}/assets`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async updateAsset (id: string, index: number, dto: AssetDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${id}/assets/index=${index}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async deleteAsset (id: string, index: number): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${id}/assets/index=${index}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async search (query: { expand: string, language: string, term: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/merchandise/brands/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/merchandise/brands`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
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
           path: `/merchandise/brands/slugs/lang=${lang}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as string[];
   }

   async getById (id: string, query?: { expand?: string[], statuses?: string[] }): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${id}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async update (id: string, dto: BrandDraftDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async delete (id: string): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async getByExternalId (externalId: string, query?: { expand?: string[], statuses?: string[] }): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/externalId=${externalId}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async updateByExternalId (externalId: string, dto: BrandDraftDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/externalId=${externalId}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async deleteByExternalId (externalId: string): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/externalId=${externalId}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async getBySlug (slug: string, lang: string, query?: { expand?: string[], statuses?: string[] }): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/slug=${slug}/lang=${lang}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async setStatus (id: string, dto: BrandStatusUpdateDTO): Promise<BrandDTO> {
       const response = await this._request({
           path: `/merchandise/brands/${id}/status`,
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
