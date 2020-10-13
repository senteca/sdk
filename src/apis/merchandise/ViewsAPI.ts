import { BaseAPI } from '../../runtime';
import { AssetDTO } from '../../models/AssetDTO';
import { ViewDTO } from '../../models/ViewDTO';
import { ViewDraftDTO } from '../../models/ViewDraftDTO';

export class ViewsAPI extends BaseAPI {
   async addViewAsset (viewId: string, dto: AssetDTO): Promise<ViewDTO> {
       const response = await this.request({
           path: `/merchandise/views/${viewId}/assets`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async updateViewAsset (viewId: string, assetIndex: number, dto: AssetDTO): Promise<ViewDTO> {
       const response = await this.request({
           path: `/merchandise/views/${viewId}/assets/${assetIndex}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async removeViewAsset (viewId: string, assetIndex: number): Promise<ViewDTO> {
       const response = await this.request({
           path: `/merchandise/views/${viewId}/assets/${assetIndex}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async searchViews (query: { expand: string, language: string, term: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/views/search`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createView (dto: ViewDraftDTO): Promise<ViewDTO> {
       const response = await this.request({
           path: `/merchandise/views`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async filterViews (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/views`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async findViewById (id: string): Promise<ViewDTO> {
       const response = await this.request({
           path: `/merchandise/views/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async updateViewById (id: string, dto: ViewDraftDTO): Promise<ViewDTO> {
       const response = await this.request({
           path: `/merchandise/views/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async deleteViewById (id: string): Promise<ViewDTO> {
       const response = await this.request({
           path: `/merchandise/views/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async findViewBySlug (language: string, slug: string): Promise<ViewDTO> {
       const response = await this.request({
           path: `/merchandise/views/slug/${language}/${slug}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

}
