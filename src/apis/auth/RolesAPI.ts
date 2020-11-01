import { BaseAPI } from '../../runtime';
import { Permission } from '../../models/Permission';
import { RoleFilterResultDTO } from '../../models/RoleFilterResultDTO';
import { RoleDTO } from '../../models/RoleDTO';

export class RolesAPI extends BaseAPI {
   async getPermissions (): Promise<Permission[]> {
       const response = await this._request({
           path: `/auth/roles/permissions`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as Permission[];
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<RoleFilterResultDTO> {
       const response = await this._request({
           path: `/auth/roles`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as RoleFilterResultDTO;
   }

   async create (dto: RoleDTO): Promise<object> {
       const response = await this._request({
           path: `/auth/roles`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as object;
   }

   async getById (id: string): Promise<object> {
       const response = await this._request({
           path: `/auth/roles/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async update (id: string, dto: RoleDTO): Promise<object> {
       const response = await this._request({
           path: `/auth/roles/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as object;
   }

   async delete (id: string): Promise<object> {
       const response = await this._request({
           path: `/auth/roles/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as object;
   }

}
