/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';

export const WishListsClean = async (days: number): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/wish-lists/clean/${encodeURIComponent(days)}`,
        method: 'DELETE',
        
        
        
        
    });
    
}

