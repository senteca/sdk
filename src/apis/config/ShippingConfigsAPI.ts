import { BaseAPI } from '../../runtime';
import { ShippingConfigDraftDTO } from '../../models/ShippingConfigDraftDTO';
import { ShippingConfigDTO } from '../../models/ShippingConfigDTO';

export class ShippingConfigsAPI extends BaseAPI {
   async create (dto: ShippingConfigDraftDTO): Promise<ShippingConfigDTO> {
       const response = await this._request({
           path: `/config/shipping-configs`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ShippingConfigDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/config/shipping-configs`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       
   }

   async getById (id: string): Promise<ShippingConfigDTO> {
       const response = await this._request({
           path: `/config/shipping-configs/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ShippingConfigDTO;
   }

   async update (id: string, dto: ShippingConfigDraftDTO): Promise<ShippingConfigDTO> {
       const response = await this._request({
           path: `/config/shipping-configs/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ShippingConfigDTO;
   }

   async delete (id: string): Promise<ShippingConfigDTO> {
       const response = await this._request({
           path: `/config/shipping-configs/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ShippingConfigDTO;
   }

}
