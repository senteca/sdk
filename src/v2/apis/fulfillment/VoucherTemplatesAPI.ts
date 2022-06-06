/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { VoucherTemplateFilterResultDTO, VoucherTemplateDraftDTO, VoucherTemplateDTO, SetCustomFieldDTO } from '../../../models';

export const VoucherTemplatesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<VoucherTemplateFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/voucher-templates`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as VoucherTemplateFilterResultDTO;
}

export const VoucherTemplatesCreate = async (dto: VoucherTemplateDraftDTO): Promise<VoucherTemplateDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/voucher-templates`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as VoucherTemplateDTO;
}

export const VoucherTemplatesGetById = async (id: string): Promise<VoucherTemplateDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/voucher-templates/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as VoucherTemplateDTO;
}

export const VoucherTemplatesUpdateById = async (id: string, dto: VoucherTemplateDraftDTO): Promise<VoucherTemplateDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/voucher-templates/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as VoucherTemplateDTO;
}

export const VoucherTemplatesDeleteById = async (id: string): Promise<VoucherTemplateDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/voucher-templates/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as VoucherTemplateDTO;
}

export const VoucherTemplatesSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/voucher-templates/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

