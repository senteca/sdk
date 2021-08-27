import { BaseAPI } from '../../runtime';
import { DiscountTemplateFilterResultDTO } from '@models';
import { DiscountTemplateDraftDTO } from '@models';
import { DiscountTemplateDTO } from '@models';
import { SetCustomFieldDTO } from '@models';

export class DiscountTemplatesAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<DiscountTemplateFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-templates`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as DiscountTemplateFilterResultDTO;
   }

   async create (dto: DiscountTemplateDraftDTO): Promise<DiscountTemplateDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-templates`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as DiscountTemplateDTO;
   }

   async getById (id: string): Promise<DiscountTemplateDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-templates/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as DiscountTemplateDTO;
   }

   async updateById (id: string, dto: DiscountTemplateDraftDTO): Promise<DiscountTemplateDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-templates/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as DiscountTemplateDTO;
   }

   async deleteById (id: string): Promise<DiscountTemplateDTO> {
       const response = await this._request({
           path: `/fulfillment/discount-templates/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as DiscountTemplateDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/discount-templates/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

}
