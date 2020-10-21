import { BaseAPI } from '../../runtime';
import { ThemeDraftDTO } from '../../models/ThemeDraftDTO';
import { ThemeDTO } from '../../models/ThemeDTO';
import { ThemeFilterResultDTO } from '../../models/ThemeFilterResultDTO';

export class ThemeAPI extends BaseAPI {
   async install (themeKey: string, storeKey: string, interfaceKey: string): Promise<void> {
       const response = await this._request({
           path: `/cms/theme/install/${themeKey}/${storeKey}/${interfaceKey}`,
           method: 'POST',
           
           
           
        });
       return (response.json() as unknown) as void;
   }

   async create (dto: ThemeDraftDTO): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ThemeDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<ThemeFilterResultDTO> {
       const response = await this._request({
           path: `/cms/theme`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ThemeFilterResultDTO;
   }

   async update (id: string, dto: ThemeDraftDTO): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ThemeDTO;
   }

   async delete (id: string): Promise<ThemeDTO> {
       const response = await this._request({
           path: `/cms/theme/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ThemeDTO;
   }

}
