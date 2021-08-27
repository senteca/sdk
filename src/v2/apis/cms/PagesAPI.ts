/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { PageDraftDTO,PageDTO,PageFilterResultDTO,PageStatusUpdateDTO,PageNameUpdateDTO,PageLabelUpdateDTO,PageNodesUpdateDTO } from '../../../models';

export const PagesCreate = async (dto: PageDraftDTO): Promise<PageDTO> => {
    const response = await HttpClient.request({
        path: `/cms/pages`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as PageDTO;
}

export const PagesFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<PageFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/cms/pages`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as PageFilterResultDTO;
}

export const PagesGetById = async (id: string): Promise<PageDTO> => {
    const response = await HttpClient.request({
        path: `/cms/pages/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as PageDTO;
}

export const PagesUpdate = async (id: string, dto: PageDraftDTO): Promise<PageDTO> => {
    const response = await HttpClient.request({
        path: `/cms/pages/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as PageDTO;
}

export const PagesDelete = async (id: string): Promise<PageDTO> => {
    const response = await HttpClient.request({
        path: `/cms/pages/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as PageDTO;
}

export const PagesSetStatus = async (id: string, dto: PageStatusUpdateDTO): Promise<PageDTO> => {
    const response = await HttpClient.request({
        path: `/cms/pages/${encodeURIComponent(id)}/status`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as PageDTO;
}

export const PagesSetName = async (id: string, dto: PageNameUpdateDTO): Promise<PageDTO> => {
    const response = await HttpClient.request({
        path: `/cms/pages/${encodeURIComponent(id)}/name`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as PageDTO;
}

export const PagesSetLabel = async (id: string, dto: PageLabelUpdateDTO): Promise<PageDTO> => {
    const response = await HttpClient.request({
        path: `/cms/pages/${encodeURIComponent(id)}/label`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as PageDTO;
}

export const PagesSetNodes = async (id: string, dto: PageNodesUpdateDTO): Promise<PageDTO> => {
    const response = await HttpClient.request({
        path: `/cms/pages/${encodeURIComponent(id)}/nodes`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as PageDTO;
}

export const PagesApplyChanges = async (id: string): Promise<PageDTO> => {
    const response = await HttpClient.request({
        path: `/cms/pages/${encodeURIComponent(id)}/apply`,
        method: 'POST',
        
        
        
        
    });
    return (response as unknown) as PageDTO;
}

export const PagesRevertChanges = async (id: string): Promise<PageDTO> => {
    const response = await HttpClient.request({
        path: `/cms/pages/${encodeURIComponent(id)}/revert`,
        method: 'POST',
        
        
        
        
    });
    return (response as unknown) as PageDTO;
}

