import { BaseAPI } from '../../runtime';
import { MenuItemFilterResultDTO, MenuItemDraftDTO, MenuItemDTO, CustomItemDTO, SectionElementDTO, SectionItemDTO } from '../../models';

export class MenuAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<MenuItemFilterResultDTO> {
       const response = await this._request({
           path: `/cms/menu`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as MenuItemFilterResultDTO;
   }

   async create (dto: MenuItemDraftDTO): Promise<MenuItemDTO[]> {
       const response = await this._request({
           path: `/cms/menu`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as MenuItemDTO[];
   }

   async getAll (): Promise<MenuItemDTO[]> {
       const response = await this._request({
           path: `/cms/menu/all`,
           method: 'GET',
        });
       return (response as unknown) as MenuItemDTO[];
   }

   async getMenuByKey (key: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/key=${encodeURIComponent(key)}`,
           method: 'GET',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async getMenuById (id: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async updateMenu (id: string, dto: MenuItemDraftDTO): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async delete (id: string): Promise<MenuItemDTO[]> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as MenuItemDTO[];
   }

   async createMenuItem (id: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/items`,
           method: 'POST',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async updateMenuItem (id: string, itemId: string, dto: CustomItemDTO): Promise<CustomItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/items/${encodeURIComponent(itemId)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomItemDTO;
   }

   async deleteMenuItem (id: string, itemId: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/items/${encodeURIComponent(itemId)}`,
           method: 'DELETE',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async createSectionElement (id: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/sections`,
           method: 'POST',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async deleteSectionElement (id: string, sectionId: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}`,
           method: 'DELETE',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async updateSectionElement (id: string, sectionId: string, dto: SectionElementDTO): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async getSectionElementById (id: string, sectionId: string): Promise<SectionElementDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}`,
           method: 'GET',
        });
       return (response as unknown) as SectionElementDTO;
   }

   async createSectionItem (id: string, sectionId: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items`,
           method: 'POST',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async getSectionItemById (id: string, sectionId: string, itemId: string): Promise<SectionItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}`,
           method: 'GET',
        });
       return (response as unknown) as SectionItemDTO;
   }

   async updateSectionItem (id: string, sectionId: string, itemId: string, dto: SectionItemDTO): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async deleteSectionItem (id: string, sectionId: string, itemId: string): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}`,
           method: 'DELETE',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async createCustomSectionItem (id: string, sectionId: string, itemId: string, query: { location: string }): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}`,
           method: 'POST',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as MenuItemDTO;
   }

   async updateCustomSectionItem (id: string, sectionId: string, itemId: string, customItemId: string, query: { location: string }, dto: CustomItemDTO): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}/custom/${encodeURIComponent(customItemId)}`,
           method: 'POST',
           query: this._stringifyQuery(query),
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as MenuItemDTO;
   }

   async deleteCustomSectionItem (id: string, sectionId: string, itemId: string, customItemId: string, query: { location: string }): Promise<MenuItemDTO> {
       const response = await this._request({
           path: `/cms/menu/${encodeURIComponent(id)}/sections/${encodeURIComponent(sectionId)}/items/${encodeURIComponent(itemId)}/custom/${encodeURIComponent(customItemId)}`,
           method: 'DELETE',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as MenuItemDTO;
   }

}
