import { BaseAPI } from '../../runtime';
import { CmsContentDraftDTO } from '../../models/CmsContentDraftDTO';
import { CmsContentDTO } from '../../models/CmsContentDTO';
import { CmsContentFilterResultDTO } from '../../models/CmsContentFilterResultDTO';

export class ContentsAPI extends BaseAPI {
   async create (dto: CmsContentDraftDTO): Promise<CmsContentDTO> {
       const response = await this._request({
           path: `/cms/contents`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CmsContentDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<CmsContentFilterResultDTO> {
       const response = await this._request({
           path: `/cms/contents`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CmsContentFilterResultDTO;
   }

   async update (id: string, dto: CmsContentDraftDTO): Promise<CmsContentDTO> {
       const response = await this._request({
           path: `/cms/contents/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CmsContentDTO;
   }

   async delete (id: string): Promise<CmsContentDTO> {
       const response = await this._request({
           path: `/cms/contents/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CmsContentDTO;
   }

}
