import { BaseAPI } from '../../runtime';
import { CustomerConsentTypeDraftDTO } from '../../models/CustomerConsentTypeDraftDTO';
import { CustomerConsentTypeDTO } from '../../models/CustomerConsentTypeDTO';
import { CustomerConsentTypeFilterResultDTO } from '../../models/CustomerConsentTypeFilterResultDTO';

export class CustomerConsentTypesAPI extends BaseAPI {
   async create (dto: CustomerConsentTypeDraftDTO): Promise<CustomerConsentTypeDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerConsentTypeDTO;
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentTypeFilterResultDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CustomerConsentTypeFilterResultDTO;
   }

   async getByKey (key: string): Promise<CustomerConsentTypeDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerConsentTypeDTO;
   }

   async getById (id: string): Promise<CustomerConsentTypeDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerConsentTypeDTO;
   }

   async update (id: string, dto: CustomerConsentTypeDTO): Promise<CustomerConsentTypeDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerConsentTypeDTO;
   }

   async delete (id: string): Promise<CustomerConsentTypeDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerConsentTypeDTO;
   }

}
