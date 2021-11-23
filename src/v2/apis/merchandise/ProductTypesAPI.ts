/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { ProductTypeDraftDTO, ProductTypeDTO, ProductTypeFilterResultDTO } from '../../../models';

export const ProductTypesCreate = async (dto: ProductTypeDraftDTO): Promise<ProductTypeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/product-types`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ProductTypeDTO;
}

export const ProductTypesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ProductTypeFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/product-types`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ProductTypeFilterResultDTO;
}

export const ProductTypesGetByKey = async (key: string): Promise<ProductTypeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/product-types/key=${encodeURIComponent(key)}`,
        method: 'GET',
    });
    return (response as unknown) as ProductTypeDTO;
}

export const ProductTypesGetById = async (id: string): Promise<ProductTypeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/product-types/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as ProductTypeDTO;
}

export const ProductTypesUpdateById = async (id: string, dto: ProductTypeDraftDTO): Promise<ProductTypeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/product-types/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ProductTypeDTO;
}

export const ProductTypesDeleteById = async (id: string): Promise<ProductTypeDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/product-types/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as ProductTypeDTO;
}

