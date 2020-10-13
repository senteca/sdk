import { BaseAPI } from '../../runtime';
import { RoleDTO } from '../../models/RoleDTO';

export class RolesAPI extends BaseAPI {
   async getPermissions (): Promise<void> {
       const response = await this.request({
           path: `/auth/roles/permissions`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async filterRoles (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/auth/roles`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createRole (dto: RoleDTO): Promise<void> {
       const response = await this.request({
           path: `/auth/roles`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as void;
   }

   async findRoleById (id: string): Promise<void> {
       const response = await this.request({
           path: `/auth/roles/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async updateRoleById (id: string, dto: RoleDTO): Promise<void> {
       const response = await this.request({
           path: `/auth/roles/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as void;
   }

   async deleteRoleById (id: string): Promise<void> {
       const response = await this.request({
           path: `/auth/roles/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as void;
   }

}
