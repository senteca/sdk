import { BaseAPI } from '../../runtime';
import { TagDraftDTO,TagDTO,TagFilterResultDTO } from '../../models';

export class TagsAPI extends BaseAPI {
   async create (dto: TagDraftDTO): Promise<TagDTO> {
       const response = await this._request({
           path: `/cms/tags`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as TagDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<TagFilterResultDTO> {
       const response = await this._request({
           path: `/cms/tags`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as TagFilterResultDTO;
   }

   async update (id: string, dto: TagDraftDTO): Promise<TagDTO> {
       const response = await this._request({
           path: `/cms/tags/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as TagDTO;
   }

   async delete (id: string): Promise<TagDTO> {
       const response = await this._request({
           path: `/cms/tags/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as TagDTO;
   }

}
