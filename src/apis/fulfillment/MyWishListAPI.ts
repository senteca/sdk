import { BaseAPI } from '../../runtime';
import { WishListDTO, WishListItemDraftDTO } from '../../models';

export class MyWishListAPI extends BaseAPI {
   async getMy (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<WishListDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as WishListDTO;
   }

   async addMyItem (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: WishListItemDraftDTO): Promise<WishListDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as WishListDTO;
   }

   async syncMy (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<WishListDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list/sync`,
           method: 'POST',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as WishListDTO;
   }

   async removeMyItemsBulk (dto: string[]): Promise<WishListDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list/bulk`,
           method: 'DELETE',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as WishListDTO;
   }

   async removeMyItem (itemId: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<WishListDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list/${encodeURIComponent(itemId)}`,
           method: 'DELETE',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as WishListDTO;
   }

}
