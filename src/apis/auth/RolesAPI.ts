import { BaseAPI } from '../../runtime';
import { Permission } from '@models';
import { RoleFilterResultDTO } from '@models';
import { RoleDraftDTO } from '@models';
import { RoleDTO } from '@models';

export class RolesAPI extends BaseAPI {
   async getPermissions (): Promise<Permission[]> {
       const response = await this._request({
           path: `/auth/roles/permissions`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as Permission[];
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<RoleFilterResultDTO> {
       const response = await this._request({
           path: `/auth/roles`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as RoleFilterResultDTO;
   }

   async create (dto: RoleDraftDTO): Promise<RoleDTO> {
       const response = await this._request({
           path: `/auth/roles`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as RoleDTO;
   }

   async getById (id: string): Promise<RoleDTO> {
       const response = await this._request({
           path: `/auth/roles/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as RoleDTO;
   }

   async update (id: string, dto: RoleDraftDTO): Promise<RoleDTO> {
       const response = await this._request({
           path: `/auth/roles/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as RoleDTO;
   }

   async delete (id: string): Promise<RoleDTO> {
       const response = await this._request({
           path: `/auth/roles/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as RoleDTO;
   }

}
