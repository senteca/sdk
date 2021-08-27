/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { DiscountTemplateFilterResultDTO } from '@models';
import { DiscountTemplateDraftDTO } from '@models';
import { DiscountTemplateDTO } from '@models';
import { SetCustomFieldDTO } from '@models';

export const DiscountTemplatesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<DiscountTemplateFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-templates`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as DiscountTemplateFilterResultDTO;
}

export const DiscountTemplatesCreate = async (dto: DiscountTemplateDraftDTO): Promise<DiscountTemplateDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-templates`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as DiscountTemplateDTO;
}

export const DiscountTemplatesGetById = async (id: string): Promise<DiscountTemplateDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-templates/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as DiscountTemplateDTO;
}

export const DiscountTemplatesUpdateById = async (id: string, dto: DiscountTemplateDraftDTO): Promise<DiscountTemplateDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-templates/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as DiscountTemplateDTO;
}

export const DiscountTemplatesDeleteById = async (id: string): Promise<DiscountTemplateDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-templates/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as DiscountTemplateDTO;
}

export const DiscountTemplatesSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/discount-templates/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    
}

