import { BaseAPI } from '../../runtime';
import { AssetDTO } from '../../models/AssetDTO';
import { BrandDTO } from '../../models/BrandDTO';
import { BrandDraftDTO } from '../../models/BrandDraftDTO';
import { BrandStatusUpdateDTO } from '../../models/BrandStatusUpdateDTO';

export class BrandsAPI extends BaseAPI {
   async addBrandAsset (brandId: string, dto: AssetDTO): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands/${brandId}/assets`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async updateBrandAsset (brandId: string, assetIndex: number, dto: AssetDTO): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands/${brandId}/assets/${assetIndex}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async removeBrandAsset (brandId: string, assetIndex: number): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands/${brandId}/assets/${assetIndex}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async searchBrands (query: { expand: string, language: string, term: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/brands/search`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async filterBrands (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/brands`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createBrand (dto: BrandDraftDTO): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async getAllBrandSlugs (languageCode: string): Promise<void> {
       const response = await this.request({
           path: `/merchandise/brands/slugs/${languageCode}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async findBrandById (id: string, query: { expand: string[], statuses?: string[] }): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands/${id}`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async updateBrandById (id: string, dto: BrandDraftDTO): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async deleteBrandById (id: string): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async findBrandByExternalId (externalId: string, query: { expand: string[], statuses?: string[] }): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands/external/${externalId}`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async findBrandBySlug (languageCode: string, slug: string, query: { expand: string[], statuses?: string[] }): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands/slug/${languageCode}/${slug}`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async setBrandStatus (brandId: string, dto: BrandStatusUpdateDTO): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands/${brandId}/status`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async importBrands (dto: BrandDraftDTO): Promise<void> {
       const response = await this.request({
           path: `/merchandise/brands/import`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as void;
   }

   async updateBrandByExternalId (id: string, dto: BrandDraftDTO): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands/externalId/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as BrandDTO;
   }

   async deleteBrandByExternalId (id: string): Promise<BrandDTO> {
       const response = await this.request({
           path: `/merchandise/brands/externalId/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as BrandDTO;
   }

}
