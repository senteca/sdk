/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { ShippingSenderDTO } from '../../models/ShippingSenderDTO';
import { ShippingSenderDraftDTO } from '../../models/ShippingSenderDraftDTO';
import { ShippingSenderFilterResultDTO } from '../../models/ShippingSenderFilterResultDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';

export const ShippingSendersUpdateEcontSenders = async (moduleConfigId: string): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-senders/econt/moduleConfigId=${encodeURIComponent(moduleConfigId)}`,
        method: 'POST',
        
        
        
        
    });
    
}

export const ShippingSendersUpdateSpeedySenders = async (moduleConfigId: string): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-senders/speedy/moduleConfigId=${encodeURIComponent(moduleConfigId)}`,
        method: 'POST',
        
        
        
        
    });
    
}

export const ShippingSendersUpdateEvropatSenders = async (moduleConfigId: string): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-senders/evropat/moduleConfigId=${encodeURIComponent(moduleConfigId)}`,
        method: 'POST',
        
        
        
        
    });
    
}

export const ShippingSendersGetAllModuleConfigSenders = async (moduleConfigKey: string): Promise<ShippingSenderDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-senders/all/moduleConfigKey=${encodeURIComponent(moduleConfigKey)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as ShippingSenderDTO[];
}

export const ShippingSendersCreate = async (dto: ShippingSenderDraftDTO): Promise<ShippingSenderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-senders`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as ShippingSenderDTO;
}

export const ShippingSendersFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ShippingSenderFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-senders`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as ShippingSenderFilterResultDTO;
}

export const ShippingSendersGetByKey = async (key: string): Promise<ShippingSenderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-senders/key=${encodeURIComponent(key)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as ShippingSenderDTO;
}

export const ShippingSendersUpdateByKey = async (key: string, dto: ShippingSenderDraftDTO): Promise<ShippingSenderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-senders/key=${encodeURIComponent(key)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as ShippingSenderDTO;
}

export const ShippingSendersDeleteByKey = async (key: string): Promise<ShippingSenderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-senders/key=${encodeURIComponent(key)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as ShippingSenderDTO;
}

export const ShippingSendersSetShippingSenderCustomByKey = async (key: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shipping-senders/key=${encodeURIComponent(key)}/sender-custom`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    
}

