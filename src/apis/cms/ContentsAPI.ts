import { BaseAPI } from '../../runtime';
import { ContentDraftDTO } from '../../models/ContentDraftDTO';
import { ContentDTO } from '../../models/ContentDTO';
import { ContentFilterResultDTO } from '../../models/ContentFilterResultDTO';

export class ContentsAPI extends BaseAPI {
   async create (dto: ContentDraftDTO): Promise<ContentDTO> {
       const response = await this._request({
           path: `/cms/contents`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ContentDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<ContentFilterResultDTO> {
       const response = await this._request({
           path: `/cms/contents`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ContentFilterResultDTO;
   }

   async update (id: string, dto: ContentDraftDTO): Promise<ContentDTO> {
       const response = await this._request({
           path: `/cms/contents/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ContentDTO;
   }

   async delete (id: string): Promise<ContentDTO> {
       const response = await this._request({
           path: `/cms/contents/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ContentDTO;
   }

}
