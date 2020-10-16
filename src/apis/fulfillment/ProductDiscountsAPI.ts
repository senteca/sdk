import { BaseAPI } from '../../runtime';
import { ProductDiscountDraftDTO } from '../../models/ProductDiscountDraftDTO';
import { ProductDiscountDTO } from '../../models/ProductDiscountDTO';

export class ProductDiscountsAPI extends BaseAPI {
   async searchProductDiscounts (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async filterProductDiscounts (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/product-discounts`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async createProductDiscount (dto: ProductDiscountDraftDTO): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDiscountDTO;
   }

   async findProductDiscountById (id: string): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as ProductDiscountDTO;
   }

   async updateProductDiscountById (id: string, dto: ProductDiscountDraftDTO): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDiscountDTO;
   }

   async deleteProductDiscountById (id: string): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ProductDiscountDTO;
   }

}
