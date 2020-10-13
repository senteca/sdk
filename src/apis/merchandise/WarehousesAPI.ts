import { BaseAPI } from '../../runtime';
import { WarehouseDraftDTO } from '../../models/WarehouseDraftDTO';
import { WarehouseDTO } from '../../models/WarehouseDTO';

export class WarehousesAPI extends BaseAPI {
   async filterWarehouses (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/warehouses`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createWarehouse (dto: WarehouseDraftDTO): Promise<WarehouseDTO> {
       const response = await this.request({
           path: `/merchandise/warehouses`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as WarehouseDTO;
   }

   async findWarehouseById (id: string): Promise<WarehouseDTO> {
       const response = await this.request({
           path: `/merchandise/warehouses/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as WarehouseDTO;
   }

   async updateWarehouseById (id: string, dto: WarehouseDraftDTO): Promise<WarehouseDTO> {
       const response = await this.request({
           path: `/merchandise/warehouses/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as WarehouseDTO;
   }

   async deleteWarehouseById (id: string): Promise<WarehouseDTO> {
       const response = await this.request({
           path: `/merchandise/warehouses/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as WarehouseDTO;
   }

}
