import { BaseAPI } from '../../runtime';
import { CustomerConsentTypeFilterResultDTO } from '../../models';

export class CustomerConsentLogAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentTypeFilterResultDTO> {
       const response = await this._request({
           path: `/users/customer-consent-log`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CustomerConsentTypeFilterResultDTO;
   }

}
