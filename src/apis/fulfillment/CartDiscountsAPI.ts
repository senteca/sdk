import { BaseAPI } from '../../runtime';
import { CartDiscountDTO } from '../../models/CartDiscountDTO';
import { CartDiscountDraftDTO } from '../../models/CartDiscountDraftDTO';

export class CartDiscountsAPI extends BaseAPI {
   async importCartDiscounts (dto: string[]): Promise<CartDiscountDTO[]> {
       const response = await this.request({
           path: `/fulfillment/cart-discounts/import`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CartDiscountDTO[];
   }

   async searchCartDiscounts (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/fulfillment/cart-discounts/search`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async filterCartDiscounts (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/fulfillment/cart-discounts`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async createCartDiscount (dto: CartDiscountDraftDTO): Promise<CartDiscountDTO> {
       const response = await this.request({
           path: `/fulfillment/cart-discounts`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CartDiscountDTO;
   }

   async findCartDiscountById (id: string): Promise<CartDiscountDTO> {
       const response = await this.request({
           path: `/fulfillment/cart-discounts/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as CartDiscountDTO;
   }

   async updateCartDiscountById (id: string, dto: CartDiscountDraftDTO): Promise<CartDiscountDTO> {
       const response = await this.request({
           path: `/fulfillment/cart-discounts/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as CartDiscountDTO;
   }

   async deleteCartDiscountById (id: string): Promise<CartDiscountDTO> {
       const response = await this.request({
           path: `/fulfillment/cart-discounts/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as CartDiscountDTO;
   }

}
