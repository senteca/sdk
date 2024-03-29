/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { WishListDTO, WishListItemDraftDTO } from '../../../models';

export const MyWishListGetMy = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<WishListDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-wish-list`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as WishListDTO;
}

export const MyWishListAddMyItem = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }, dto: WishListItemDraftDTO): Promise<WishListDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-wish-list`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as WishListDTO;
}

export const MyWishListSyncMy = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<WishListDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-wish-list/sync`,
        method: 'POST',
        query: toQueryString(query),
    });
    return (response as unknown) as WishListDTO;
}

export const MyWishListRemoveMyItemsBulk = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }, dto: string[]): Promise<WishListDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-wish-list/bulk`,
        method: 'DELETE',
        query: toQueryString(query),
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as WishListDTO;
}

export const MyWishListRemoveMyItem = async (itemId: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<WishListDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-wish-list/${encodeURIComponent(itemId)}`,
        method: 'DELETE',
        query: toQueryString(query),
    });
    return (response as unknown) as WishListDTO;
}

