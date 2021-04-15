import { BaseAPI } from '../../runtime';
import { PageDraftDTO } from '../../models/PageDraftDTO';
import { PageDTO } from '../../models/PageDTO';
import { PageFilterResultDTO } from '../../models/PageFilterResultDTO';
import { PageStatusUpdateDTO } from '../../models/PageStatusUpdateDTO';
import { PageNameUpdateDTO } from '../../models/PageNameUpdateDTO';
import { PageLabelUpdateDTO } from '../../models/PageLabelUpdateDTO';
import { PageNodesUpdateDTO } from '../../models/PageNodesUpdateDTO';

export class PagesAPI extends BaseAPI {
   async create (dto: PageDraftDTO): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as PageDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<PageFilterResultDTO> {
       const response = await this._request({
           path: `/cms/pages`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as PageFilterResultDTO;
   }

   async getById (id: string): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as PageDTO;
   }

   async update (id: string, dto: PageDraftDTO): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as PageDTO;
   }

   async delete (id: string): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as PageDTO;
   }

   async setStatus (id: string, dto: PageStatusUpdateDTO): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages/${encodeURIComponent(id)}/status`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as PageDTO;
   }

   async setName (id: string, dto: PageNameUpdateDTO): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages/${encodeURIComponent(id)}/name`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as PageDTO;
   }

   async setLabel (id: string, dto: PageLabelUpdateDTO): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages/${encodeURIComponent(id)}/label`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as PageDTO;
   }

   async setNodes (id: string, dto: PageNodesUpdateDTO): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages/${encodeURIComponent(id)}/nodes`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as PageDTO;
   }

   async applyChanges (id: string): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages/${encodeURIComponent(id)}/apply`,
           method: 'POST',
           
           
           
           
        });
       return (response as unknown) as PageDTO;
   }

   async revertChanges (id: string): Promise<PageDTO> {
       const response = await this._request({
           path: `/cms/pages/${encodeURIComponent(id)}/revert`,
           method: 'POST',
           
           
           
           
        });
       return (response as unknown) as PageDTO;
   }

}
