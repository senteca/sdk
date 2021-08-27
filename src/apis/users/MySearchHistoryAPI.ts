import { BaseAPI } from '../../runtime';
import { CustomerSearchHistoryFilterResultDTO, CustomerSearchHistoryCreateDraftDTO, CustomerSearchHistoryDTO } from '../../models';

export class MySearchHistoryAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerSearchHistoryFilterResultDTO> {
       const response = await this._request({
           path: `/users/my-search-history`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CustomerSearchHistoryFilterResultDTO;
   }

   async appendMySearchHistory (dto: CustomerSearchHistoryCreateDraftDTO): Promise<CustomerSearchHistoryDTO> {
       const response = await this._request({
           path: `/users/my-search-history`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerSearchHistoryDTO;
   }

   async deleteMySearchHistoryByIdx (id: string): Promise<CustomerSearchHistoryDTO> {
       const response = await this._request({
           path: `/users/my-search-history/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as CustomerSearchHistoryDTO;
   }

}
