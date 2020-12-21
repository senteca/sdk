import { BaseAPI } from '../../runtime';
import { TagDraftDTO } from '../../models/TagDraftDTO';
import { TagDTO } from '../../models/TagDTO';
import { TagFilterResultDTO } from '../../models/TagFilterResultDTO';

export class TagsAPI extends BaseAPI {
   async create (dto: TagDraftDTO): Promise<TagDTO> {
       const response = await this._request({
           path: `/cms/tags`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TagDTO;
   }

   async filter (query?: { filter?: string, sort?: string, limit?: number, offset?: number, storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<TagFilterResultDTO> {
       const response = await this._request({
           path: `/cms/tags`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as TagFilterResultDTO;
   }

   async update (id: string, dto: TagDraftDTO): Promise<TagDTO> {
       const response = await this._request({
           path: `/cms/tags/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TagDTO;
   }

   async delete (id: string): Promise<TagDTO> {
       const response = await this._request({
           path: `/cms/tags/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as TagDTO;
   }

}
