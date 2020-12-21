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

   async filter (query?: { filter?: string, sort?: string, limit?: number, offset?: number, storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<void> {
       const response = await this._request({
           path: `/config/shipping-configs`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as void;
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
