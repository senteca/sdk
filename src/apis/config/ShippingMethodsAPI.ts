import { BaseAPI } from '../../runtime';
import { ShippingMethodDraftDTO } from '../../models/ShippingMethodDraftDTO';
import { ShippingMethodDTO } from '../../models/ShippingMethodDTO';
import { ShippingMethodFilterResultDTO } from '../../models/ShippingMethodFilterResultDTO';

export class ShippingMethodsAPI extends BaseAPI {
   async create (dto: ShippingMethodDraftDTO): Promise<ShippingMethodDTO> {
       const response = await this._request({
           path: `/config/shipping-methods`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ShippingMethodDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<ShippingMethodFilterResultDTO> {
       const response = await this._request({
           path: `/config/shipping-methods`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ShippingMethodFilterResultDTO;
   }

   async getById (id: string): Promise<ShippingMethodDTO> {
       const response = await this._request({
           path: `/config/shipping-methods/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as ShippingMethodDTO;
   }

   async update (id: string, dto: ShippingMethodDraftDTO): Promise<ShippingMethodDTO> {
       const response = await this._request({
           path: `/config/shipping-methods/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ShippingMethodDTO;
   }

   async delete (id: string): Promise<ShippingMethodDTO> {
       const response = await this._request({
           path: `/config/shipping-methods/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ShippingMethodDTO;
   }

}
