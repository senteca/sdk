import { BaseAPI } from '../../runtime';
import { ProductDiscountSearchResultDTO } from '../../models/ProductDiscountSearchResultDTO';
import { ProductDiscountFilterResultDTO } from '../../models/ProductDiscountFilterResultDTO';
import { ProductDiscountDraftDTO } from '../../models/ProductDiscountDraftDTO';
import { ProductDiscountDTO } from '../../models/ProductDiscountDTO';

export class ProductDiscountsAPI extends BaseAPI {
   async search (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<ProductDiscountSearchResultDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ProductDiscountSearchResultDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<ProductDiscountFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ProductDiscountFilterResultDTO;
   }

   async create (dto: ProductDiscountDraftDTO): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDiscountDTO;
   }

   async getById (id: string): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as ProductDiscountDTO;
   }

   async update (id: string, dto: ProductDiscountDraftDTO): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDiscountDTO;
   }

   async delete (id: string): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ProductDiscountDTO;
   }

}
