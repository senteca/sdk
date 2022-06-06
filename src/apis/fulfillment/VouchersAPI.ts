import { BaseAPI } from '../../runtime';
import { VoucherFilterResultDTO, VoucherDraftDTO, VoucherDTO, VoucherBulkCreateDTO, SetCustomFieldDTO } from '../../models';

export class VouchersAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<VoucherFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/vouchers`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as VoucherFilterResultDTO;
   }

   async create (dto: VoucherDraftDTO): Promise<VoucherDTO> {
       const response = await this._request({
           path: `/fulfillment/vouchers`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as VoucherDTO;
   }

   async getById (id: string): Promise<VoucherDTO> {
       const response = await this._request({
           path: `/fulfillment/vouchers/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as VoucherDTO;
   }

   async updateById (id: string, dto: VoucherDraftDTO): Promise<VoucherDTO> {
       const response = await this._request({
           path: `/fulfillment/vouchers/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as VoucherDTO;
   }

   async deleteById (id: string): Promise<VoucherDTO> {
       const response = await this._request({
           path: `/fulfillment/vouchers/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as VoucherDTO;
   }

   async createBulk (dto: VoucherBulkCreateDTO): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/vouchers/bulk`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/vouchers/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

}
