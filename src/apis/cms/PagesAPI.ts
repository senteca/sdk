import { BaseAPI } from '../../runtime';
import { PageDraftDTO } from '../../models/PageDraftDTO';
import { PageDTO } from '../../models/PageDTO';
import { PageFilterResultDTO } from '../../models/PageFilterResultDTO';

export class PagesAPI extends BaseAPI {
   async create (dto: PageDraftDTO): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as PageDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<PageFilterResultDTO> {
       const response = await this._request({
           path: `/cms/pages`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as PageFilterResultDTO;
   }

   async update (id: string, dto: PageDraftDTO): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as PageDTO;
   }

   async delete (id: string): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as PageDTO;
   }

}
