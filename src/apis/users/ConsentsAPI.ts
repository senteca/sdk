import { BaseAPI } from '../../runtime';
import { CustomerConsentDTO } from '@models';

export class ConsentsAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentDTO[]> {
       const response = await this._request({
           path: `/users/consents`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CustomerConsentDTO[];
   }

}
