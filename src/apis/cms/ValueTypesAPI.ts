import { BaseAPI } from '../../runtime';
import { ValueTypeDraftDTO } from '../../models/ValueTypeDraftDTO';
import { ValueTypeDTO } from '../../models/ValueTypeDTO';

export class ValueTypesAPI extends BaseAPI {
   async create (dto: ValueTypeDraftDTO): Promise<ValueTypeDTO> {
       const response = await this.request({
           path: `/cms/value-types`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as ValueTypeDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/cms/value-types`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async update (id: string, dto: ValueTypeDraftDTO): Promise<ValueTypeDTO> {
       const response = await this.request({
           path: `/cms/value-types/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ValueTypeDTO;
   }

   async delete (id: string): Promise<ValueTypeDTO> {
       const response = await this.request({
           path: `/cms/value-types/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as ValueTypeDTO;
   }

}
