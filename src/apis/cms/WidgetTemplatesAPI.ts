import { BaseAPI } from '../../runtime';
import { WidgetTemplateDraftDTO } from '../../models/WidgetTemplateDraftDTO';
import { WidgetTemplateDTO } from '../../models/WidgetTemplateDTO';

export class WidgetTemplatesAPI extends BaseAPI {
   async create (dto: WidgetTemplateDraftDTO): Promise<WidgetTemplateDTO> {
       const response = await this.request({
           path: `/cms/widget-templates`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as WidgetTemplateDTO;
   }

   async filter (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/cms/widget-templates`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async update (id: string, dto: WidgetTemplateDraftDTO): Promise<WidgetTemplateDTO> {
       const response = await this.request({
           path: `/cms/widget-templates/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as WidgetTemplateDTO;
   }

   async delete (id: string): Promise<WidgetTemplateDTO> {
       const response = await this.request({
           path: `/cms/widget-templates/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as WidgetTemplateDTO;
   }

}
