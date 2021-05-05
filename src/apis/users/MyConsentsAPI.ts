import { BaseAPI } from '../../runtime';
import { CustomerConsentDTO } from '../../models/CustomerConsentDTO';
import { CustomerConsentRequestDTO } from '../../models/CustomerConsentRequestDTO';
import { CustomerConsentRequestBulkDTO } from '../../models/CustomerConsentRequestBulkDTO';

export class MyConsentsAPI extends BaseAPI {
   async getMyConsents (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentDTO[]> {
       const response = await this._request({
           path: `/users/my-consents`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CustomerConsentDTO[];
   }

   async approve (dto: CustomerConsentRequestDTO): Promise<CustomerConsentDTO> {
       const response = await this._request({
           path: `/users/my-consents/approve`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerConsentDTO;
   }

   async approveBulk (dto: CustomerConsentRequestBulkDTO): Promise<CustomerConsentDTO[]> {
       const response = await this._request({
           path: `/users/my-consents/approve/bulk`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerConsentDTO[];
   }

   async reject (dto: CustomerConsentRequestDTO): Promise<CustomerConsentDTO> {
       const response = await this._request({
           path: `/users/my-consents/reject`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerConsentDTO;
   }

}
