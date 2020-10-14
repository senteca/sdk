import { BaseAPI } from '../../runtime';
import { Permission } from '../../models/Permission';
import { RoleDTO } from '../../models/RoleDTO';

export class RolesAPI extends BaseAPI {
   async getPermissions (): Promise<Permission[]> {
       const response = await this.request({
           path: `/auth/roles/permissions`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as Permission[];
   }

   async filterRoles (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/auth/roles`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async createRole (dto: RoleDTO): Promise<object> {
       const response = await this.request({
           path: `/auth/roles`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as object;
   }

   async findRoleById (id: string): Promise<object> {
       const response = await this.request({
           path: `/auth/roles/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async updateRoleById (id: string, dto: RoleDTO): Promise<object> {
       const response = await this.request({
           path: `/auth/roles/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as object;
   }

   async deleteRoleById (id: string): Promise<object> {
       const response = await this.request({
           path: `/auth/roles/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

}
