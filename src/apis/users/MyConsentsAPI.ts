import { BaseAPI } from '../../runtime';
import { CustomerConsentDTO, CustomerConsentRequestDTO, CustomerConsentRequestBulkDTO, CustomerConsentConfirmDTO } from '../../models';

export class MyConsentsAPI extends BaseAPI {
   async getMyConsents (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentDTO[]> {
       const response = await this._request({
           path: `/users/my-consents`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CustomerConsentDTO[];
   }

   async approve (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }, dto: CustomerConsentRequestDTO): Promise<CustomerConsentDTO> {
       const response = await this._request({
           path: `/users/my-consents/approve`,
           method: 'PUT',
           query: this._stringifyQuery(query),
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerConsentDTO;
   }

   async approveBulk (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }, dto: CustomerConsentRequestBulkDTO): Promise<CustomerConsentDTO[]> {
       const response = await this._request({
           path: `/users/my-consents/approve/bulk`,
           method: 'PUT',
           query: this._stringifyQuery(query),
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerConsentDTO[];
   }

   async reject (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }, dto: CustomerConsentRequestDTO): Promise<CustomerConsentDTO> {
       const response = await this._request({
           path: `/users/my-consents/reject`,
           method: 'PUT',
           query: this._stringifyQuery(query),
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerConsentDTO;
   }

   async confirm (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }, dto: CustomerConsentConfirmDTO): Promise<void> {
       const response = await this._request({
           path: `/users/my-consents/confirm`,
           method: 'PUT',
           query: this._stringifyQuery(query),
           body: dto,
           contentType: 'application/json',
        });
       
   }

}
