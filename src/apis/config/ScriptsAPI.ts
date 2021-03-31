import { BaseAPI } from '../../runtime';
import { ScriptDraftDTO } from '../../models/ScriptDraftDTO';
import { ScriptDTO } from '../../models/ScriptDTO';

export class ScriptsAPI extends BaseAPI {
   async create (dto: ScriptDraftDTO): Promise<ScriptDTO> {
       const response = await this._request({
           path: `/config/scripts`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ScriptDTO;
   }

   async filter (): Promise<ScriptDTO[]> {
       const response = await this._request({
           path: `/config/scripts`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ScriptDTO[];
   }

   async getByKey (key: string): Promise<ScriptDTO> {
       const response = await this._request({
           path: `/config/scripts/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ScriptDTO;
   }

   async getById (id: string): Promise<ScriptDTO> {
       const response = await this._request({
           path: `/config/scripts/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ScriptDTO;
   }

   async update (id: string, dto: ScriptDraftDTO): Promise<ScriptDTO> {
       const response = await this._request({
           path: `/config/scripts/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ScriptDTO;
   }

   async delete (id: string): Promise<ScriptDTO> {
       const response = await this._request({
           path: `/config/scripts/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ScriptDTO;
   }

}
