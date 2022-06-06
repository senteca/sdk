import { BaseAPI } from '../../runtime';
import { VoucherTemplateFilterResultDTO, VoucherTemplateDraftDTO, VoucherTemplateDTO, SetCustomFieldDTO } from '../../models';

export class VoucherTemplatesAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<VoucherTemplateFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/voucher-templates`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as VoucherTemplateFilterResultDTO;
   }

   async create (dto: VoucherTemplateDraftDTO): Promise<VoucherTemplateDTO> {
       const response = await this._request({
           path: `/fulfillment/voucher-templates`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as VoucherTemplateDTO;
   }

   async getById (id: string): Promise<VoucherTemplateDTO> {
       const response = await this._request({
           path: `/fulfillment/voucher-templates/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as VoucherTemplateDTO;
   }

   async updateById (id: string, dto: VoucherTemplateDraftDTO): Promise<VoucherTemplateDTO> {
       const response = await this._request({
           path: `/fulfillment/voucher-templates/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as VoucherTemplateDTO;
   }

   async deleteById (id: string): Promise<VoucherTemplateDTO> {
       const response = await this._request({
           path: `/fulfillment/voucher-templates/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as VoucherTemplateDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/voucher-templates/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

}
