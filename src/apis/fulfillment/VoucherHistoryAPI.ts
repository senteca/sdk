import { BaseAPI } from '../../runtime';
import { VoucherHistoryFilterResultDTO, VoucherHistoryDTO, MoneyDTO, TotalUsesDTO } from '../../models';

export class VoucherHistoryAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<VoucherHistoryFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/voucher-history`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as VoucherHistoryFilterResultDTO;
   }

   async getById (id: string): Promise<VoucherHistoryDTO> {
       const response = await this._request({
           path: `/fulfillment/voucher-history/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as VoucherHistoryDTO;
   }

   async getAmountUsed (id: string): Promise<MoneyDTO> {
       const response = await this._request({
           path: `/fulfillment/voucher-history/${encodeURIComponent(id)}/amount-used`,
           method: 'GET',
        });
       return (response as unknown) as MoneyDTO;
   }

   async getTotalUses (id: string): Promise<TotalUsesDTO> {
       const response = await this._request({
           path: `/fulfillment/voucher-history/${encodeURIComponent(id)}/times-used`,
           method: 'GET',
        });
       return (response as unknown) as TotalUsesDTO;
   }

}
