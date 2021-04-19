import { BaseAPI } from '../../runtime';
import { MenuItemDraftDTO } from '../../models/MenuItemDraftDTO';
import { MenuItemDTO } from '../../models/MenuItemDTO';
import { SectionElementDTO } from '../../models/SectionElementDTO';
import { SectionItemRequestDTO } from '../../models/SectionItemRequestDTO';

export class MenuMenuItemsAPI extends BaseAPI {
   async get (): Promise<any> {
       const response = await this._request({
           path: `/cms/menu/menuItems`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as any;
   }

   async create (dto: MenuItemDraftDTO): Promise<MenuItemDTO[]> {
       const response = await this._request({
           path: `/cms/menu/menuItems`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as MenuItemDTO[];
   }

   async getMenuById (id: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/menuItems/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as MenuItemDTO;
   }

   async updateMenu (id: string, dto: MenuItemDraftDTO): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/menuItems/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async delete (id: string): Promise<MenuItemDTO[]> {
       const response = await this._request({
           path: `/cms/menu/menuItems/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as MenuItemDTO[];
   }

   async createSectionElement (id: string, dto: SectionElementDTO): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/menuItems/${encodeURIComponent(id)}/sections`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async deleteAllSectionElements (id: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/menuItems/${encodeURIComponent(id)}/sections`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as MenuItemDTO;
   }

   async updateSectionElement (id: string, sectionId: string, dto: SectionElementDTO): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/menuItems/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async deleteSectionElement (id: string, sectionId: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/menuItems/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as MenuItemDTO;
   }

   async deleteAllSectionItems (id: string, sectionId: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/menuItems/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as MenuItemDTO;
   }

   async insertSectionItem (id: string, sectionId: string, dto: SectionItemRequestDTO): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/menuItems/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async deleteSectionItem (id: string, sectionId: string, itemId: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/menuItems/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as MenuItemDTO;
   }

}
