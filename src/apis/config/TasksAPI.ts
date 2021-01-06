import { BaseAPI } from '../../runtime';
import { TaskActionPayloadDTO } from '../../models/TaskActionPayloadDTO';
import { TaskDraftDTO } from '../../models/TaskDraftDTO';
import { TaskDTO } from '../../models/TaskDTO';
import { TaskFilterResultDTO } from '../../models/TaskFilterResultDTO';

export class TasksAPI extends BaseAPI {
   async start (name: string, dto: TaskActionPayloadDTO): Promise<void> {
       const response = await this._request({
           path: `/config/tasks/start/${encodeURIComponent(name)}`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async fail (name: string, dto: TaskActionPayloadDTO): Promise<void> {
       const response = await this._request({
           path: `/config/tasks/fail/${encodeURIComponent(name)}`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async complete (name: string, dto: TaskActionPayloadDTO): Promise<void> {
       const response = await this._request({
           path: `/config/tasks/complete/${encodeURIComponent(name)}`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async create (dto: TaskDraftDTO): Promise<TaskDTO> {
       const response = await this._request({
           path: `/config/tasks`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as TaskDTO;
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<TaskFilterResultDTO> {
       const response = await this._request({
           path: `/config/tasks`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as TaskFilterResultDTO;
   }

   async getByName (name: string): Promise<TaskDTO> {
       const response = await this._request({
           path: `/config/tasks/name=${encodeURIComponent(name)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as TaskDTO;
   }

   async getById (id: string): Promise<TaskDTO> {
       const response = await this._request({
           path: `/config/tasks/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as TaskDTO;
   }

   async delete (id: string): Promise<TaskDTO> {
       const response = await this._request({
           path: `/config/tasks/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as TaskDTO;
   }

}
