import { BaseAPI } from '../../runtime';
import { AssetDTO } from '../../models/AssetDTO';
import { CategoryDTO } from '../../models/CategoryDTO';
import { CategoryDraftDTO } from '../../models/CategoryDraftDTO';

export class CategoriesAPI extends BaseAPI {
   async addCategoryAsset (categoryId: string, dto: AssetDTO): Promise<CategoryDTO> {
       const response = await this.request({
           path: `/merchandise/categories/${categoryId}/assets`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async updateCategoryAsset (categoryId: string, assetIndex: number, dto: AssetDTO): Promise<CategoryDTO> {
       const response = await this.request({
           path: `/merchandise/categories/${categoryId}/assets/${assetIndex}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async removeCategoryAsset (categoryId: string, assetIndex: number): Promise<CategoryDTO> {
       const response = await this.request({
           path: `/merchandise/categories/${categoryId}/assets/${assetIndex}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async searchCategory (query: { expand: string, language: string, term: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/categories/search`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async filterCategories (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/categories`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createCategory (dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this.request({
           path: `/merchandise/categories`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async getCategorySlugs (languageCode: string): Promise<void> {
       const response = await this.request({
           path: `/merchandise/categories/slugs/${languageCode}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async findCategoryById (id: string, query: { expand: string[], statuses?: string[] }): Promise<CategoryDTO> {
       const response = await this.request({
           path: `/merchandise/categories/${id}`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async updateCategoryById (id: string, dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this.request({
           path: `/merchandise/categories/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async deleteCategoryById (id: string): Promise<CategoryDTO> {
       const response = await this.request({
           path: `/merchandise/categories/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async findCategoryByExternalId (externalId: string, query: { expand: string[], statuses?: string[] }): Promise<CategoryDTO> {
       const response = await this.request({
           path: `/merchandise/categories/external/${externalId}`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async findCategoryBySlug (languageCode: string, slug: string, query: { expand: string[], statuses?: string[] }): Promise<CategoryDTO> {
       const response = await this.request({
           path: `/merchandise/categories/slug/${languageCode}/${slug}`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async importCategories (dto: CategoryDraftDTO): Promise<void> {
       const response = await this.request({
           path: `/merchandise/categories/import`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as void;
   }

   async updateCategoryByExternalId (id: string, dto: CategoryDraftDTO): Promise<CategoryDTO> {
       const response = await this.request({
           path: `/merchandise/categories/external/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as CategoryDTO;
   }

   async deleteCategoryByExternalId (id: string): Promise<CategoryDTO> {
       const response = await this.request({
           path: `/merchandise/categories/external/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as CategoryDTO;
   }

}
