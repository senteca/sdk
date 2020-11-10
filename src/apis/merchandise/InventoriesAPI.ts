import { BaseAPI } from '../../runtime';
import { InventorySearchResultDTO } from '../../models/InventorySearchResultDTO';
import { InventoryDraftDTONew } from '../../models/InventoryDraftDTONew';
import { InventoryDTONew } from '../../models/InventoryDTONew';
import { InventoryFilterResultDTO } from '../../models/InventoryFilterResultDTO';
import { InventoryQuantityDTO } from '../../models/InventoryQuantityDTO';

export class InventoriesAPI extends BaseAPI {
   async search (query: { term: string, expand?: string, limit?: number, offset?: number }): Promise<InventorySearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/inventories/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as InventorySearchResultDTO;
   }

   async create (dto: InventoryDraftDTONew): Promise<InventoryDTONew> {
       const response = await this._request({
           path: `/merchandise/inventories`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTONew;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<InventoryFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/inventories`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as InventoryFilterResultDTO;
   }

   async update (id: string, dto: InventoryDraftDTONew): Promise<InventoryDTONew> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTONew;
   }

   async delete (id: string): Promise<InventoryDraftDTONew> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as InventoryDraftDTONew;
   }

   async updateQuantity (id: string, dto: InventoryQuantityDTO): Promise<InventoryDTONew> {
       const response = await this._request({
           path: `/merchandise/inventories/${encodeURIComponent(id)}/quantity`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as InventoryDTONew;
   }

}
