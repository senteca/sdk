import { BaseAPI } from '../../runtime';
import { CustomerConsentDTO } from '../../models/CustomerConsentDTO';
import { CustomerConsentRequestDTO } from '../../models/CustomerConsentRequestDTO';

export class MyConsentsAPI extends BaseAPI {
   async getMyConsents (): Promise<CustomerConsentDTO[]> {
       const response = await this._request({
           path: `/users/my-consents`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerConsentDTO[];
   }

   async approve (dto: CustomerConsentRequestDTO): Promise<CustomerConsentDTO> {
       const response = await this._request({
           path: `/users/my-consents/approve`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerConsentDTO;
   }

   async reject (dto: CustomerConsentRequestDTO): Promise<CustomerConsentDTO> {
       const response = await this._request({
           path: `/users/my-consents/reject`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerConsentDTO;
   }

}
