import { BaseAPI } from '../../runtime';
import { AssetDTO } from '../../models/AssetDTO';
import { ViewDTO } from '../../models/ViewDTO';
import { ViewSearchResultDTO } from '../../models/ViewSearchResultDTO';
import { ViewDraftDTO } from '../../models/ViewDraftDTO';
import { ViewFilterResultDTO } from '../../models/ViewFilterResultDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';

export class ViewsAPI extends BaseAPI {
   async createAsset (id: string, dto: AssetDTO): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${id}/assets`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async updateAssetByIndex (id: string, index: number, dto: AssetDTO): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${id}/assets/index=${index}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async deleteAssetByIndex (id: string, index: number): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${id}/assets/index=${index}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async search (query: { language: string, term: string, expand?: string, limit?: number, offset?: number }): Promise<ViewSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/views/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ViewSearchResultDTO;
   }

   async create (dto: ViewDraftDTO): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<ViewFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/views`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ViewFilterResultDTO;
   }

   async getById (id: string): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async update (id: string, dto: ViewDraftDTO): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async delete (id: string): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async getBySlug (slug: string, lang: string): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/slug=${slug}/lang=${lang}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<ViewDTO> {
       const response = await this._request({
           path: `/merchandise/views/${id}/custom`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ViewDTO;
   }

}
