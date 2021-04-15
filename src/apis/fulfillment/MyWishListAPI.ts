import { BaseAPI } from '../../runtime';
import { WishListDTO } from '../../models/WishListDTO';
import { WishListItemDraftDTO } from '../../models/WishListItemDraftDTO';
import { WishListItemDTO } from '../../models/WishListItemDTO';

export class MyWishListAPI extends BaseAPI {
   async getMy (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<WishListDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as WishListDTO;
   }

   async addMyItem (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: WishListItemDraftDTO): Promise<WishListItemDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as WishListItemDTO;
   }

   async syncMy (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<WishListDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list/sync`,
           method: 'POST',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as WishListDTO;
   }

   async removeMyItem (itemId: string): Promise<WishListItemDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list/${encodeURIComponent(itemId)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as WishListItemDTO;
   }

}
