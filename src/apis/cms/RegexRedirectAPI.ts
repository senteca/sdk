import { BaseAPI } from '../../runtime';
import { RegexRedirectDraftDTO, RegexRedirectDTO, RegexRedirectFilterResultDTO } from '../../models';

export class RegexRedirectAPI extends BaseAPI {
   async create (dto: RegexRedirectDraftDTO): Promise<RegexRedirectDTO> {
       const response = await this._request({
           path: `/cms/regex-redirect`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as RegexRedirectDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<RegexRedirectFilterResultDTO> {
       const response = await this._request({
           path: `/cms/regex-redirect`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as RegexRedirectFilterResultDTO;
   }

   async import (dto: RegexRedirectDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/cms/regex-redirect/import`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async getByMatchingRegex (matchingRegex: string): Promise<RegexRedirectDTO> {
       const response = await this._request({
           path: `/cms/regex-redirect/matchingRegex=${encodeURIComponent(matchingRegex)}`,
           method: 'GET',
        });
       return (response as unknown) as RegexRedirectDTO;
   }

   async getById (id: string): Promise<RegexRedirectDTO> {
       const response = await this._request({
           path: `/cms/regex-redirect/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as RegexRedirectDTO;
   }

   async update (id: string, dto: RegexRedirectDraftDTO): Promise<RegexRedirectDTO> {
       const response = await this._request({
           path: `/cms/regex-redirect/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as RegexRedirectDTO;
   }

   async delete (id: string): Promise<RegexRedirectDTO> {
       const response = await this._request({
           path: `/cms/regex-redirect/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as RegexRedirectDTO;
   }

}
