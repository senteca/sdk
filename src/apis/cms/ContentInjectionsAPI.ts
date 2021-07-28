import { BaseAPI } from '../../runtime';
import { CmsContentInjectionDraftDTO } from '../../models/CmsContentInjectionDraftDTO';
import { CmsContentInjectionDTO } from '../../models/CmsContentInjectionDTO';
import { CmsContentInjectionsFilterResultDTO } from '../../models/CmsContentInjectionsFilterResultDTO';
import { CmsContentInjectionFilterValidDTO } from '../../models/CmsContentInjectionFilterValidDTO';

export class ContentInjectionsAPI extends BaseAPI {
   async create (dto: CmsContentInjectionDraftDTO): Promise<CmsContentInjectionDTO> {
       const response = await this._request({
           path: `/cms/content-injections`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CmsContentInjectionDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CmsContentInjectionsFilterResultDTO> {
       const response = await this._request({
           path: `/cms/content-injections`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CmsContentInjectionsFilterResultDTO;
   }

   async getAllValid (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<CmsContentInjectionFilterValidDTO[]> {
       const response = await this._request({
           path: `/cms/content-injections/valid`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CmsContentInjectionFilterValidDTO[];
   }

   async getById (id: string): Promise<CmsContentInjectionDTO> {
       const response = await this._request({
           path: `/cms/content-injections/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as CmsContentInjectionDTO;
   }

   async updateById (id: string, dto: CmsContentInjectionDraftDTO): Promise<CmsContentInjectionDTO> {
       const response = await this._request({
           path: `/cms/content-injections/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CmsContentInjectionDTO;
   }

   async deleteById (id: string): Promise<CmsContentInjectionDTO> {
       const response = await this._request({
           path: `/cms/content-injections/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as CmsContentInjectionDTO;
   }

}
