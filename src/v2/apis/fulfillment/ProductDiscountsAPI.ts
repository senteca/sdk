/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { ProductDiscountSearchResultDTO } from '../../models/ProductDiscountSearchResultDTO';
import { ProductDiscountFilterResultDTO } from '../../models/ProductDiscountFilterResultDTO';
import { ProductDiscountDraftDTO } from '../../models/ProductDiscountDraftDTO';
import { ProductDiscountDTO } from '../../models/ProductDiscountDTO';

export const ProductDiscountsSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ProductDiscountSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/product-discounts/search`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as ProductDiscountSearchResultDTO;
}

export const ProductDiscountsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ProductDiscountFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/product-discounts`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as ProductDiscountFilterResultDTO;
}

export const ProductDiscountsCreate = async (dto: ProductDiscountDraftDTO): Promise<ProductDiscountDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/product-discounts`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as ProductDiscountDTO;
}

export const ProductDiscountsGetById = async (id: string): Promise<ProductDiscountDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/product-discounts/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as ProductDiscountDTO;
}

export const ProductDiscountsUpdate = async (id: string, dto: ProductDiscountDraftDTO): Promise<ProductDiscountDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/product-discounts/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as ProductDiscountDTO;
}

export const ProductDiscountsDelete = async (id: string): Promise<ProductDiscountDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/product-discounts/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as ProductDiscountDTO;
}

