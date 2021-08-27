import { BaseAPI } from '../../runtime';
import { CustomerInvitationDraftDTO } from '@models';
import { CustomerInvitationDTO } from '@models';
import { CustomerInvitationFilterResultDTO } from '@models';

export class CustomerInvitationsAPI extends BaseAPI {
   async create (dto: CustomerInvitationDraftDTO): Promise<CustomerInvitationDTO> {
       const response = await this._request({
           path: `/users/customer-invitations`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerInvitationDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerInvitationFilterResultDTO> {
       const response = await this._request({
           path: `/users/customer-invitations`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as CustomerInvitationFilterResultDTO;
   }

   async getByKey (key: string): Promise<CustomerInvitationDTO> {
       const response = await this._request({
           path: `/users/customer-invitations/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as CustomerInvitationDTO;
   }

   async getById (id: string): Promise<CustomerInvitationDTO> {
       const response = await this._request({
           path: `/users/customer-invitations/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as CustomerInvitationDTO;
   }

   async update (id: string, dto: CustomerInvitationDTO): Promise<CustomerInvitationDTO> {
       const response = await this._request({
           path: `/users/customer-invitations/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as CustomerInvitationDTO;
   }

   async delete (id: string): Promise<CustomerInvitationDTO> {
       const response = await this._request({
           path: `/users/customer-invitations/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as CustomerInvitationDTO;
   }

   async resend (id: string): Promise<CustomerInvitationDTO> {
       const response = await this._request({
           path: `/users/customer-invitations/${encodeURIComponent(id)}/resend`,
           method: 'PATCH',
           
           
           
           
        });
       return (response as unknown) as CustomerInvitationDTO;
   }

}
