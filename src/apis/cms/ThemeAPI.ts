import { BaseAPI } from '../../runtime';
import { StoreDTO, ThemeDTO, ThemeDraftDTO, ThemeFilterResultDTO } from '../../models';

export class ThemeAPI extends BaseAPI {
   async install (themeId: string, storeKey: string, interfaceKey: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/cms/theme/install/themeId=${encodeURIComponent(themeId)}/storeKey=${encodeURIComponent(storeKey)}/interfaceKey=${encodeURIComponent(interfaceKey)}`,
           method: 'POST',
        });
       return (response as unknown) as StoreDTO;
   }

   async uninstall (storeKey: string, interfaceKey: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/cms/theme/uninstall/storeKey=${encodeURIComponent(storeKey)}/interfaceKey=${encodeURIComponent(interfaceKey)}`,
           method: 'POST',
        });
       return (response as unknown) as StoreDTO;
   }

   async check (themeKey: string, themeVersion: string): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme/check/themeKey=${encodeURIComponent(themeKey)}/themeVersion=${encodeURIComponent(themeVersion)}`,
           method: 'GET',
        });
       return (response as unknown) as ThemeDTO;
   }

   async sync (themeId: string, storeKey: string, interfaceKey: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/cms/theme/sync/themeId=${encodeURIComponent(themeId)}/storeKey=${encodeURIComponent(storeKey)}/interfaceKey=${encodeURIComponent(interfaceKey)}`,
           method: 'POST',
        });
       return (response as unknown) as StoreDTO;
   }

   async setConfig (storeKey: string, interfaceKey: string, dto: any): Promise<StoreDTO> {
       const response = await this._request({
           path: `/cms/theme/config/storeKey=${encodeURIComponent(storeKey)}/interfaceKey=${encodeURIComponent(interfaceKey)}`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as StoreDTO;
   }

   async updateTemplate (storeKey: string, interfaceKey: string, componentName: string, templateName: string, dto: any): Promise<StoreDTO> {
       const response = await this._request({
           path: `/cms/theme/template/storeKey=${encodeURIComponent(storeKey)}/interfaceKey=${encodeURIComponent(interfaceKey)}/componentName=${encodeURIComponent(componentName)}/templateName=${encodeURIComponent(templateName)}`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as StoreDTO;
   }

   async create (dto: ThemeDraftDTO): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ThemeDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ThemeFilterResultDTO> {
       const response = await this._request({
           path: `/cms/theme`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ThemeFilterResultDTO;
   }

   async getVersion (key: string, version: string): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme/key=${encodeURIComponent(key)}/versions/version=${encodeURIComponent(version)}`,
           method: 'GET',
        });
       return (response as unknown) as ThemeDTO;
   }

   async getById (id: string): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as ThemeDTO;
   }

   async delete (id: string): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as ThemeDTO;
   }

}
