import { BaseAPI } from '../../runtime';
import { Permission } from '../../models/Permission';
import { RoleFilterResultDTO } from '../../models/RoleFilterResultDTO';
import { RoleDraftDTO } from '../../models/RoleDraftDTO';
import { RoleDTO } from '../../models/RoleDTO';

export class RolesAPI extends BaseAPI {
   async getPermissions (): Promise<Permission[]> {
       const response = await this._request({
           path: `/auth/roles/permissions`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as Permission[];
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<RoleFilterResultDTO> {
       const response = await this._request({
           path: `/auth/roles`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as RoleFilterResultDTO;
   }

   async create (dto: RoleDraftDTO): Promise<RoleDTO> {
       const response = await this._request({
           path: `/auth/roles`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as RoleDTO;
   }

   async getById (id: string): Promise<RoleDTO> {
       const response = await this._request({
           path: `/auth/roles/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as RoleDTO;
   }

   async update (id: string, dto: RoleDraftDTO): Promise<RoleDTO> {
       const response = await this._request({
           path: `/auth/roles/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as RoleDTO;
   }

   async delete (id: string): Promise<RoleDTO> {
       const response = await this._request({
           path: `/auth/roles/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as RoleDTO;
   }

}
