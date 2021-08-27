import { BaseAPI } from '../../runtime';
import {  } from '../../models';

export class WishListsAPI extends BaseAPI {
   async clean (days: number): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/wish-lists/clean/${encodeURIComponent(days)}`,
           method: 'DELETE',
        });
       
   }

}
