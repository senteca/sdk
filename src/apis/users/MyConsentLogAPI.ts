import { BaseAPI } from '../../runtime';
import { CustomerConsentLogFilterResultDTO } from '@models';

export class MyConsentLogAPI extends BaseAPI {
   async getMyConsentLog (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentLogFilterResultDTO> {
       const response = await this._request({
           path: `/users/my-consent-log`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CustomerConsentLogFilterResultDTO;
   }

}
