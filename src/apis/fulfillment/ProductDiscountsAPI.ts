import { BaseAPI } from '../../runtime';
import { ProductDiscountSearchResultDTO, ProductDiscountFilterResultDTO, ProductDiscountDraftDTO, ProductDiscountDTO } from '../../models';

export class ProductDiscountsAPI extends BaseAPI {
   async search (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ProductDiscountSearchResultDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ProductDiscountSearchResultDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ProductDiscountFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ProductDiscountFilterResultDTO;
   }

   async create (dto: ProductDiscountDraftDTO): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ProductDiscountDTO;
   }

   async getById (id: string): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as ProductDiscountDTO;
   }

   async update (id: string, dto: ProductDiscountDraftDTO): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ProductDiscountDTO;
   }

   async delete (id: string): Promise<ProductDiscountDTO> {
       const response = await this._request({
           path: `/fulfillment/product-discounts/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as ProductDiscountDTO;
   }

}
