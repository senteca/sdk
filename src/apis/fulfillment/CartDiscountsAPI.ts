import { BaseAPI } from '../../runtime';
import { CartDiscountDTO } from '../../models/CartDiscountDTO';
import { CartDiscountSearchResultDTO } from '../../models/CartDiscountSearchResultDTO';
import { CartDiscountFilterResultDTO } from '../../models/CartDiscountFilterResultDTO';
import { CartDiscountDraftDTO } from '../../models/CartDiscountDraftDTO';

export class CartDiscountsAPI extends BaseAPI {
   async import (dto: string[]): Promise<CartDiscountDTO[]> {
       const response = await this._request({
           path: `/fulfillment/cart-discounts/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CartDiscountDTO[];
   }

   async search (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CartDiscountSearchResultDTO> {
       const response = await this._request({
           path: `/fulfillment/cart-discounts/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CartDiscountSearchResultDTO;
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CartDiscountFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/cart-discounts`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CartDiscountFilterResultDTO;
   }

   async create (dto: CartDiscountDraftDTO): Promise<CartDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/cart-discounts`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CartDiscountDTO;
   }

   async getById (id: string): Promise<CartDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/cart-discounts/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CartDiscountDTO;
   }

   async update (id: string, dto: CartDiscountDraftDTO): Promise<CartDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/cart-discounts/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CartDiscountDTO;
   }

   async delete (id: string): Promise<CartDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/cart-discounts/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CartDiscountDTO;
   }

}
