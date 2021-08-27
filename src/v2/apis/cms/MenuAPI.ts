/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { MenuItemDTO,MenuItemDraftDTO,CustomItemDTO,SectionElementDTO,SectionItemDTO } from '../../../models';

export const MenuGetAll = async (): Promise<MenuItemDTO[]> => {
    const response = await HttpClient.request({
        path: `/cms/menu`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as MenuItemDTO[];
}

export const MenuCreate = async (dto: MenuItemDraftDTO): Promise<MenuItemDTO[]> => {
    const response = await HttpClient.request({
        path: `/cms/menu`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as MenuItemDTO[];
}

export const MenuGetMenuById = async (id: string): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuUpdateMenu = async (id: string, dto: MenuItemDraftDTO): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuDelete = async (id: string): Promise<MenuItemDTO[]> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as MenuItemDTO[];
}

export const MenuCreateMenuItem = async (id: string): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/items`,
        method: 'POST',
        
        
        
        
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuUpdateMenuItem = async (id: string, itemId: string, dto: CustomItemDTO): Promise<CustomItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/items/${encodeURIComponent(itemId)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as CustomItemDTO;
}

export const MenuDeleteMenuItem = async (id: string, itemId: string): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/items/${encodeURIComponent(itemId)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuCreateSectionElement = async (id: string): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/sections`,
        method: 'POST',
        
        
        
        
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuDeleteSectionElement = async (id: string, sectionId: string): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuUpdateSectionElement = async (id: string, sectionId: string, dto: SectionElementDTO): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuGetSectionElementById = async (id: string, sectionId: string): Promise<SectionElementDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as SectionElementDTO;
}

export const MenuCreateSectionItem = async (id: string, sectionId: string): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items`,
        method: 'POST',
        
        
        
        
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuGetSectionItemById = async (id: string, sectionId: string, itemId: string): Promise<SectionItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as SectionItemDTO;
}

export const MenuUpdateSectionItem = async (id: string, sectionId: string, itemId: string, dto: SectionItemDTO): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuDeleteSectionItem = async (id: string, sectionId: string, itemId: string): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuCreateCustomSectionItem = async (id: string, sectionId: string, itemId: string, query: { location: string }): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}`,
        method: 'POST',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuUpdateCustomSectionItem = async (id: string, sectionId: string, itemId: string, customItemId: string, query: { location: string }, dto: CustomItemDTO): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}/custom/${encodeURIComponent(customItemId)}`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as MenuItemDTO;
}

export const MenuDeleteCustomSectionItem = async (id: string, sectionId: string, itemId: string, customItemId: string, query: { location: string }): Promise<MenuItemDTO> => {
    const response = await HttpClient.request({
        path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}/custom/${encodeURIComponent(customItemId)}`,
        method: 'DELETE',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as MenuItemDTO;
}

