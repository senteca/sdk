import { BaseAPI } from '../../runtime';
import { CmsContentDraftDTO, CmsContentDTO, CmsContentFilterResultDTO, CmsContentImportDTO } from '../../models';

export class ContentsAPI extends BaseAPI {
   async create (dto: CmsContentDraftDTO): Promise<CmsContentDTO> {
       const response = await this._request({
           path: `/cms/contents`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CmsContentDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CmsContentFilterResultDTO> {
       const response = await this._request({
           path: `/cms/contents`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CmsContentFilterResultDTO;
   }

   async import (dto: CmsContentImportDTO[]): Promise<void> {
       const response = await this._request({
           path: `/cms/contents/import`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async getByKey (key: string): Promise<CmsContentDTO> {
       const response = await this._request({
           path: `/cms/contents/key=${encodeURIComponent(key)}`,
           method: 'GET',
        });
       return (response as unknown) as CmsContentDTO;
   }

   async getById (id: string): Promise<CmsContentDTO> {
       const response = await this._request({
           path: `/cms/contents/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as CmsContentDTO;
   }

   async update (id: string, dto: CmsContentDraftDTO): Promise<CmsContentDTO> {
       const response = await this._request({
           path: `/cms/contents/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CmsContentDTO;
   }

   async delete (id: string): Promise<CmsContentDTO> {
       const response = await this._request({
           path: `/cms/contents/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as CmsContentDTO;
   }

   async deleteAllByTypeName (typeName: string): Promise<void> {
       const response = await this._request({
           path: `/cms/contents/typeName=${encodeURIComponent(typeName)}`,
           method: 'DELETE',
        });
       
   }

}
