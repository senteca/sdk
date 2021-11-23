/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CartDiscountDraftDTO, CartDiscountDTO, CartDiscountSearchResultDTO, CartDiscountFilterResultDTO, SetCustomFieldDTO, CartDiscountBulkDeleteDTO } from '../../../models';

export const CartDiscountsImport = async (dto: CartDiscountDraftDTO[]): Promise<CartDiscountDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/cart-discounts/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CartDiscountDTO[];
}

export const CartDiscountsSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CartDiscountSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/cart-discounts/search`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CartDiscountSearchResultDTO;
}

export const CartDiscountsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CartDiscountFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/cart-discounts`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CartDiscountFilterResultDTO;
}

export const CartDiscountsCreate = async (dto: CartDiscountDraftDTO): Promise<CartDiscountDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/cart-discounts`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CartDiscountDTO;
}

export const CartDiscountsGetById = async (id: string): Promise<CartDiscountDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/cart-discounts/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as CartDiscountDTO;
}

export const CartDiscountsUpdate = async (id: string, dto: CartDiscountDraftDTO): Promise<CartDiscountDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/cart-discounts/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CartDiscountDTO;
}

export const CartDiscountsDelete = async (id: string): Promise<CartDiscountDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/cart-discounts/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as CartDiscountDTO;
}

export const CartDiscountsSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/cart-discounts/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const CartDiscountsBulkDelete = async (dto: CartDiscountBulkDeleteDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/cart-discounts/bulk/delete`,
        method: 'DELETE',
        body: dto,
        contentType: 'application/json',
    });
    
}

