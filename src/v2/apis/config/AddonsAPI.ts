/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { AddonFilterResultDTO } from '../../models/AddonFilterResultDTO';
import { AddonDraftDTO } from '../../models/AddonDraftDTO';
import { AddonDTO } from '../../models/AddonDTO';
import { AddonRequestDTO } from '../../models/AddonRequestDTO';
import { AddonResponseDTO } from '../../models/AddonResponseDTO';

export const AddonsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AddonFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/config/addons`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as AddonFilterResultDTO;
}

export const AddonsRegister = async (dto: AddonDraftDTO): Promise<AddonDTO> => {
    const response = await HttpClient.request({
        path: `/config/addons`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as AddonDTO;
}

export const AddonsBulkRegister = async (dto: AddonDraftDTO[]): Promise<AddonDraftDTO[]> => {
    const response = await HttpClient.request({
        path: `/config/addons/bulk-register`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as AddonDraftDTO[];
}

export const AddonsRequest = async (dto: AddonRequestDTO): Promise<AddonResponseDTO> => {
    const response = await HttpClient.request({
        path: `/config/addons/request`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as AddonResponseDTO;
}

export const AddonsReply = async (dto: AddonResponseDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/config/addons/reply`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    
}

