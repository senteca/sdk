import { BaseAPI } from '../../runtime';
import { ValueTypeDraftDTO } from '../../models/ValueTypeDraftDTO';
import { ValueTypeDTO } from '../../models/ValueTypeDTO';
import { ValueTypeFilterResultDTO } from '../../models/ValueTypeFilterResultDTO';

export class ValueTypesAPI extends BaseAPI {
   async create (dto: ValueTypeDraftDTO): Promise<ValueTypeDTO> {
       const response = await this._request({
           path: `/cms/value-types`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ValueTypeDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<ValueTypeFilterResultDTO> {
       const response = await this._request({
           path: `/cms/value-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ValueTypeFilterResultDTO;
   }

   async update (id: string, dto: ValueTypeDraftDTO): Promise<ValueTypeDTO> {
       const response = await this._request({
           path: `/cms/value-types/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ValueTypeDTO;
   }

   async delete (id: string): Promise<ValueTypeDTO> {
       const response = await this._request({
           path: `/cms/value-types/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ValueTypeDTO;
   }

}
