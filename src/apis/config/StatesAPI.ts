import { BaseAPI } from '../../runtime';
import { StateDraftDTO } from '../../models/StateDraftDTO';
import { StateDTO } from '../../models/StateDTO';

export class StatesAPI extends BaseAPI {
   async createState (dto: StateDraftDTO): Promise<StateDTO> {
       const response = await this.request({
           path: `/config/states`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as StateDTO;
   }

   async filterStates (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/config/states`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async findStateById (id: string): Promise<StateDTO> {
       const response = await this.request({
           path: `/config/states/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as StateDTO;
   }

   async updateStateById (id: string, dto: StateDraftDTO): Promise<StateDTO> {
       const response = await this.request({
           path: `/config/states/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as StateDTO;
   }

   async deleteStateById (id: string): Promise<StateDTO> {
       const response = await this.request({
           path: `/config/states/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as StateDTO;
   }

   async findStateByKey (key: string): Promise<StateDTO> {
       const response = await this.request({
           path: `/config/states/key/${key}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as StateDTO;
   }

}
