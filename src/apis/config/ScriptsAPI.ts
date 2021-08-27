import { BaseAPI } from '../../runtime';
import { ScriptDraftDTO, ScriptDTO, ScriptFilterResultDTO, CookieDraftDTO, CookieDTO } from '../../models';

export class ScriptsAPI extends BaseAPI {
   async create (dto: ScriptDraftDTO): Promise<ScriptDTO> {
       const response = await this._request({
           path: `/config/scripts`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ScriptDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ScriptFilterResultDTO> {
       const response = await this._request({
           path: `/config/scripts`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ScriptFilterResultDTO;
   }

   async getByKey (key: string): Promise<ScriptDTO> {
       const response = await this._request({
           path: `/config/scripts/key=${encodeURIComponent(key)}`,
           method: 'GET',
        });
       return (response as unknown) as ScriptDTO;
   }

   async getById (id: string): Promise<ScriptDTO> {
       const response = await this._request({
           path: `/config/scripts/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as ScriptDTO;
   }

   async update (id: string, dto: ScriptDraftDTO): Promise<ScriptDTO> {
       const response = await this._request({
           path: `/config/scripts/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ScriptDTO;
   }

   async delete (id: string): Promise<ScriptDTO> {
       const response = await this._request({
           path: `/config/scripts/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as ScriptDTO;
   }

   async createCookie (id: string, dto: CookieDraftDTO): Promise<CookieDTO> {
       const response = await this._request({
           path: `/config/scripts/${encodeURIComponent(id)}/cookies`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CookieDTO;
   }

   async getCookies (id: string): Promise<CookieDTO[]> {
       const response = await this._request({
           path: `/config/scripts/${encodeURIComponent(id)}/cookies`,
           method: 'GET',
        });
       return (response as unknown) as CookieDTO[];
   }

   async getCookieById (id: string, cookieId: string): Promise<CookieDTO> {
       const response = await this._request({
           path: `/config/scripts/${encodeURIComponent(id)}/cookies/${encodeURIComponent(cookieId)}`,
           method: 'GET',
        });
       return (response as unknown) as CookieDTO;
   }

   async updateCookie (id: string, cookieId: string, dto: CookieDraftDTO): Promise<CookieDTO> {
       const response = await this._request({
           path: `/config/scripts/${encodeURIComponent(id)}/cookies/${encodeURIComponent(cookieId)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CookieDTO;
   }

   async deleteCookie (id: string, cookieId: string): Promise<CookieDTO> {
       const response = await this._request({
           path: `/config/scripts/${encodeURIComponent(id)}/cookies/${encodeURIComponent(cookieId)}`,
           method: 'DELETE',
        });
       return (response as unknown) as CookieDTO;
   }

}
