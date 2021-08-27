import { BaseAPI } from '../../runtime';
import { CmsRedirectDraftDTO } from '@models';
import { CmsRedirectDTO } from '@models';
import { CmsRedirectFilterResultDTO } from '@models';

export class RedirectsAPI extends BaseAPI {
   async create (dto: CmsRedirectDraftDTO): Promise<CmsRedirectDTO> {
       const response = await this._request({
           path: `/cms/redirects`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CmsRedirectDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CmsRedirectFilterResultDTO> {
       const response = await this._request({
           path: `/cms/redirects`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CmsRedirectFilterResultDTO;
   }

   async import (dto: CmsRedirectDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/cms/redirects/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async getByFrom (from: string): Promise<CmsRedirectDTO> {
       const response = await this._request({
           path: `/cms/redirects/from=${encodeURIComponent(from)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as CmsRedirectDTO;
   }

   async getById (id: string): Promise<CmsRedirectDTO> {
       const response = await this._request({
           path: `/cms/redirects/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as CmsRedirectDTO;
   }

   async update (id: string, dto: CmsRedirectDraftDTO): Promise<CmsRedirectDTO> {
       const response = await this._request({
           path: `/cms/redirects/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CmsRedirectDTO;
   }

   async delete (id: string): Promise<CmsRedirectDTO> {
       const response = await this._request({
           path: `/cms/redirects/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as CmsRedirectDTO;
   }

}
