/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomLineItemTypeDraftDTO, CustomLineItemTypeDTO } from '../../../models';

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

