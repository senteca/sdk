import { BaseAPI } from '../../runtime';
import { StoreDTO } from '../../models/StoreDTO';
import { ThemeDTO } from '../../models/ThemeDTO';
import { ThemeDraftDTO } from '../../models/ThemeDraftDTO';
import { ThemeFilterResultDTO } from '../../models/ThemeFilterResultDTO';

export class ThemeAPI extends BaseAPI {
   async install (themeId: string, storeKey: string, interfaceKey: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/cms/theme/install/${encodeURIComponent(themeId)}/${encodeURIComponent(storeKey)}/${encodeURIComponent(interfaceKey)}`,
           method: 'POST',
           
           
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async uninstall (storeKey: string, interfaceKey: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/cms/theme/uninstall/${encodeURIComponent(storeKey)}/${encodeURIComponent(interfaceKey)}`,
           method: 'POST',
           
           
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async check (themeKey: string, themeVersion: string): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme/check/${encodeURIComponent(themeKey)}/${encodeURIComponent(themeVersion)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ThemeDTO;
   }

   async sync (themeId: string, storeKey: string, interfaceKey: string): Promise<StoreDTO> {
       const response = await this._request({
           path: `/cms/theme/sync/${encodeURIComponent(themeId)}/${encodeURIComponent(storeKey)}/${encodeURIComponent(interfaceKey)}`,
           method: 'POST',
           
           
           
           
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async setConfig (storeKey: string, interfaceKey: string, dto: any): Promise<StoreDTO> {
       const response = await this._request({
           path: `/cms/theme/config/${encodeURIComponent(storeKey)}/${encodeURIComponent(interfaceKey)}`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async updateTemplate (storeKey: string, interfaceKey: string, componentName: string, templateName: string, dto: any): Promise<StoreDTO> {
       const response = await this._request({
           path: `/cms/theme/template/${encodeURIComponent(storeKey)}/${encodeURIComponent(interfaceKey)}/${encodeURIComponent(componentName)}/${encodeURIComponent(templateName)}`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as StoreDTO;
   }

   async create (dto: ThemeDraftDTO): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ThemeDTO;
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ThemeFilterResultDTO> {
       const response = await this._request({
           path: `/cms/theme`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ThemeFilterResultDTO;
   }

   async getByKey (key: string): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ThemeDTO;
   }

   async getById (id: string): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ThemeDTO;
   }

   async delete (id: string): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ThemeDTO;
   }

}
