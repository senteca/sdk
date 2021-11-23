import { BaseAPI } from '../../runtime';
import { CustomerConsentTypeCreateDTO, CustomerConsentTypeDTO, CustomerConsentTypeFilterResultDTO } from '../../models';

export class CustomerConsentTypesAPI extends BaseAPI {
   async create (dto: CustomerConsentTypeCreateDTO): Promise<CustomerConsentTypeDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerConsentTypeDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerConsentTypeFilterResultDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CustomerConsentTypeFilterResultDTO;
   }

   async getByKey (key: string): Promise<CustomerConsentTypeDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types/key=${encodeURIComponent(key)}`,
           method: 'GET',
        });
       return (response as unknown) as CustomerConsentTypeDTO;
   }

   async getByTag (tag: string): Promise<CustomerConsentTypeDTO[]> {
       const response = await this._request({
           path: `/users/customer-consent-types/tag=${encodeURIComponent(tag)}`,
           method: 'GET',
        });
       return (response as unknown) as CustomerConsentTypeDTO[];
   }

   async getById (id: string): Promise<CustomerConsentTypeDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as CustomerConsentTypeDTO;
   }

   async update (id: string, dto: CustomerConsentTypeDTO): Promise<CustomerConsentTypeDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerConsentTypeDTO;
   }

   async delete (id: string): Promise<CustomerConsentTypeDTO> {
       const response = await this._request({
           path: `/users/customer-consent-types/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as CustomerConsentTypeDTO;
   }

}
