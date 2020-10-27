import { BaseAPI } from '../../runtime';
import { AssetDTO } from '../../models/AssetDTO';
import { CollectionDTO } from '../../models/CollectionDTO';
import { CollectionSearchResultDTO } from '../../models/CollectionSearchResultDTO';
import { CollectionDraftDTO } from '../../models/CollectionDraftDTO';
import { CollectionFilterResultDTO } from '../../models/CollectionFilterResultDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';

export class CollectionsAPI extends BaseAPI {
   async createAsset (id: string, dto: AssetDTO): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/${encodeURIComponent(id)}/assets`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async updateAssetByIndex (id: string, index: number, dto: AssetDTO): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/${encodeURIComponent(id)}/assets/index=${encodeURIComponent(index)}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async deleteAssetByIndex (id: string, index: number): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/${encodeURIComponent(id)}/assets/index=${encodeURIComponent(index)}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async search (query: { language: string, term: string, expand?: string, limit?: number, offset?: number }): Promise<CollectionSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/collections/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as CollectionSearchResultDTO;
   }

   async create (dto: CollectionDraftDTO): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<CollectionFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/collections`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as CollectionFilterResultDTO;
   }

   async getById (id: string): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async update (id: string, dto: CollectionDraftDTO): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async delete (id: string): Promise<CollectionDraftDTO> {
       const response = await this._request({
           path: `/merchandise/collections/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as CollectionDraftDTO;
   }

   async getByExternalId (externalId: string): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/externalId=${encodeURIComponent(externalId)}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async getBySlug (slug: string, lang: string): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/slug=${encodeURIComponent(slug)}/lang=${encodeURIComponent(lang)}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<CollectionDTO> {
       const response = await this._request({
           path: `/merchandise/collections/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

}
