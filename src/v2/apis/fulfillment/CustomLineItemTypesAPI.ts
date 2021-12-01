/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomLineItemTypeFilterResultDTO, CustomLineItemTypeDraftDTO, CustomLineItemTypeDTO } from '../../../models';

export const CustomLineItemTypesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomLineItemTypeFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/custom-line-item-types`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CustomLineItemTypeFilterResultDTO;
}

export const CustomLineItemTypesRegisterCustomLineItemType = async (dto: CustomLineItemTypeDraftDTO): Promise<CustomLineItemTypeDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/custom-line-item-types`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomLineItemTypeDTO;
}

export const CustomLineItemTypesBulkRegisterCustomLineItemType = async (dto: CustomLineItemTypeDraftDTO[]): Promise<CustomLineItemTypeDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/custom-line-item-types/bulk-register`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomLineItemTypeDTO[];
}

