import { BaseAPI } from '../../runtime';
import { WidgetDraftDTO } from '../../models/WidgetDraftDTO';
import { WidgetDTO } from '../../models/WidgetDTO';

export class WidgetsAPI extends BaseAPI {
   async create (dto: WidgetDraftDTO): Promise<WidgetDTO> {
       const response = await this.request({
           path: `/cms/widgets`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as WidgetDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/cms/widgets`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async update (id: string, dto: WidgetDraftDTO): Promise<WidgetDTO> {
       const response = await this.request({
           path: `/cms/widgets/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as WidgetDTO;
   }

   async delete (id: string): Promise<WidgetDTO> {
       const response = await this.request({
           path: `/cms/widgets/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as WidgetDTO;
   }

}
