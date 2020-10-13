import { BaseAPI } from '../../runtime';
import { ThemeDraftDTO } from '../../models/ThemeDraftDTO';
import { ThemeDTO } from '../../models/ThemeDTO';

export class ThemesAPI extends BaseAPI {
   async install (dto: ThemeDraftDTO): Promise<ThemeDTO> {
       const response = await this.request({
           path: `/cms/themes/install`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as ThemeDTO;
   }

   async deleteByKey (themeKey: string, viewKey: string): Promise<ThemeDTO> {
       const response = await this.request({
           path: `/cms/themes/themeKey=${themeKey}/viewKey=${viewKey}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as ThemeDTO;
   }

}
