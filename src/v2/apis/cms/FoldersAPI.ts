/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { FolderDraftDTO,FolderDTO,FolderFilterResultDTO,FlipFoldersDTO } from '../../../models';

export const FoldersCreate = async (dto: FolderDraftDTO): Promise<FolderDTO> => {
    const response = await HttpClient.request({
        path: `/cms/folders`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as FolderDTO;
}

export const FoldersFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<FolderFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/folders`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as FolderFilterResultDTO;
}

export const FoldersUpdate = async (id: string, dto: FolderDraftDTO): Promise<FolderDTO> => {
    const response = await HttpClient.request({
        path: `/cms/folders/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as FolderDTO;
}

export const FoldersDelete = async (id: string): Promise<FolderDTO> => {
    const response = await HttpClient.request({
        path: `/cms/folders/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as FolderDTO;
}

export const FoldersFlip = async (dto: FlipFoldersDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/cms/folders/flip`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    
}

