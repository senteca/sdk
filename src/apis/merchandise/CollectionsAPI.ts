import { BaseAPI } from '../../runtime';
import { AssetDTO } from '../../models/AssetDTO';
import { CollectionDTO } from '../../models/CollectionDTO';
import { CollectionDraftDTO } from '../../models/CollectionDraftDTO';

export class CollectionsAPI extends BaseAPI {
   async addCollectionAsset (collectionId: string, dto: AssetDTO): Promise<CollectionDTO> {
       const response = await this.request({
           path: `/merchandise/collections/${collectionId}/assets`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async updateCollectionAsset (collectionId: string, assetIndex: number, dto: AssetDTO): Promise<CollectionDTO> {
       const response = await this.request({
           path: `/merchandise/collections/${collectionId}/assets/${assetIndex}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async removeCollectionAsset (collectionId: string, assetIndex: number): Promise<CollectionDTO> {
       const response = await this.request({
           path: `/merchandise/collections/${collectionId}/assets/${assetIndex}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async searchCollection (query: { expand: string, language: string, term: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/collections/search`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createCollection (dto: CollectionDraftDTO): Promise<CollectionDTO> {
       const response = await this.request({
           path: `/merchandise/collections`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async filterCollections (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/collections`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async findCollectionById (id: string): Promise<CollectionDTO> {
       const response = await this.request({
           path: `/merchandise/collections/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async updateCollectionById (id: string, dto: CollectionDraftDTO): Promise<CollectionDTO> {
       const response = await this.request({
           path: `/merchandise/collections/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async deleteCollectionById (id: string): Promise<CollectionDraftDTO> {
       const response = await this.request({
           path: `/merchandise/collections/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as CollectionDraftDTO;
   }

   async findCollectionByExternalId (externalId: string): Promise<CollectionDTO> {
       const response = await this.request({
           path: `/merchandise/collections/external/${externalId}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

   async findCollectionBySlug (lang: string, slug: string): Promise<CollectionDTO> {
       const response = await this.request({
           path: `/merchandise/collections/slug/${lang}/${slug}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as CollectionDTO;
   }

}
