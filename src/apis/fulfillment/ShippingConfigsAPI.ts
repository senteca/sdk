import { BaseAPI } from '../../runtime';
import { ShippingConfigDraftDTO } from '../../models/ShippingConfigDraftDTO';
import { ShippingConfigDTO } from '../../models/ShippingConfigDTO';
import { ShippingConfigFilterResultDTO } from '../../models/ShippingConfigFilterResultDTO';

export class ShippingConfigsAPI extends BaseAPI {
   async create (dto: ShippingConfigDraftDTO): Promise<ShippingConfigDTO> {
       const response = await this._request({
           path: `/fulfillment/shipping-configs`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as ShippingConfigDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ShippingConfigFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/shipping-configs`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as ShippingConfigFilterResultDTO;
   }

   async getById (id: string): Promise<ShippingConfigDTO> {
       const response = await this._request({
           path: `/fulfillment/shipping-configs/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as ShippingConfigDTO;
   }

   async update (id: string, dto: ShippingConfigDraftDTO): Promise<ShippingConfigDTO> {
       const response = await this._request({
           path: `/fulfillment/shipping-configs/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as ShippingConfigDTO;
   }

   async delete (id: string): Promise<ShippingConfigDTO> {
       const response = await this._request({
           path: `/fulfillment/shipping-configs/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as ShippingConfigDTO;
   }

}
