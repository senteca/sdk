import { BaseAPI } from '../../runtime';
import { CustomerDTO } from '../../models/CustomerDTO';
import { CustomerUpdateDTO } from '../../models/CustomerUpdateDTO';
import { PasswordChangeDTO } from '../../models/PasswordChangeDTO';
import { AddressDTO } from '../../models/AddressDTO';
import { CustomerCreateDTO } from '../../models/CustomerCreateDTO';
import { CustomerFilterResultDTO } from '../../models/CustomerFilterResultDTO';
import { CustomerSearchResultDTO } from '../../models/CustomerSearchResultDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';
import { CustomerRegisterDTO } from '../../models/CustomerRegisterDTO';
import { CustomerRegisterFacebookDTO } from '../../models/CustomerRegisterFacebookDTO';
import { PasswordTokenDTO } from '../../models/PasswordTokenDTO';
import { PasswordResetDTO } from '../../models/PasswordResetDTO';

export class CustomersAPI extends BaseAPI {
   async getMyProfile (): Promise<CustomerDTO> {
       const response = await this._request({
           path: `/users/customers/my-profile`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async updateMyProfile (dto: CustomerUpdateDTO): Promise<CustomerDTO> {
       const response = await this._request({
           path: `/users/customers/my-profile`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async deleteMyProfile (): Promise<CustomerDTO> {
       const response = await this._request({
           path: `/users/customers/my-profile`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async changePassword (dto: PasswordChangeDTO): Promise<CustomerDTO> {
       const response = await this._request({
           path: `/users/customers/password`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async getMyAddresses (): Promise<AddressDTO[]> {
       const response = await this._request({
           path: `/users/customers/my-addresses`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as AddressDTO[];
   }

   async createMyAddress (dto: AddressDTO): Promise<AddressDTO> {
       const response = await this._request({
           path: `/users/customers/my-addresses`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async getMyAddressById (id: string): Promise<AddressDTO> {
       const response = await this._request({
           path: `/users/customers/my-addresses/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async updateMyAddress (id: string, dto: AddressDTO): Promise<AddressDTO> {
       const response = await this._request({
           path: `/users/customers/my-addresses/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async deleteMyAddress (id: string): Promise<AddressDTO> {
       const response = await this._request({
           path: `/users/customers/my-addresses/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async create (dto: CustomerCreateDTO): Promise<CustomerDTO> {
       const response = await this._request({
           path: `/users/customers`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<CustomerFilterResultDTO> {
       const response = await this._request({
           path: `/users/customers`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CustomerFilterResultDTO;
   }

   async search (query: { language: string, term: string, expand?: string, limit?: number, offset?: number }): Promise<CustomerSearchResultDTO> {
       const response = await this._request({
           path: `/users/customers/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CustomerSearchResultDTO;
   }

   async getById (id: string): Promise<CustomerDTO> {
       const response = await this._request({
           path: `/users/customers/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async update (id: string, dto: CustomerUpdateDTO): Promise<CustomerDTO> {
       const response = await this._request({
           path: `/users/customers/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async delete (id: string): Promise<CustomerDTO> {
       const response = await this._request({
           path: `/users/customers/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<CustomerDTO> {
       const response = await this._request({
           path: `/users/customers/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async register (dto: CustomerRegisterDTO): Promise<any> {
       const response = await this._request({
           path: `/users/customers/register`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as any;
   }

   async registerFacebook (dto: CustomerRegisterFacebookDTO): Promise<any> {
       const response = await this._request({
           path: `/users/customers/register/facebook`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as any;
   }

   async createPasswordToken (dto: PasswordTokenDTO): Promise<any> {
       const response = await this._request({
           path: `/users/customers/password-token`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as any;
   }

   async resetPassword (dto: PasswordResetDTO): Promise<CustomerDTO> {
       const response = await this._request({
           path: `/users/customers/password/reset`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async getAddresses (customerId: string): Promise<AddressDTO[]> {
       const response = await this._request({
           path: `/users/customers/${encodeURIComponent(customerId)}/addresses`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as AddressDTO[];
   }

   async createAddress (customerId: string, dto: AddressDTO): Promise<AddressDTO> {
       const response = await this._request({
           path: `/users/customers/${encodeURIComponent(customerId)}/addresses`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async getAddressById (customerId: string, addressId: string): Promise<AddressDTO> {
       const response = await this._request({
           path: `/users/customers/${encodeURIComponent(customerId)}/addresses/${encodeURIComponent(addressId)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async updateAddress (customerId: string, addressId: string, dto: AddressDTO): Promise<AddressDTO> {
       const response = await this._request({
           path: `/users/customers/${encodeURIComponent(customerId)}/addresses/${encodeURIComponent(addressId)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async deleteAddress (customerId: string, addressId: string): Promise<any> {
       const response = await this._request({
           path: `/users/customers/${encodeURIComponent(customerId)}/addresses/${encodeURIComponent(addressId)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as any;
   }

   async import (dto: CustomerCreateDTO[]): Promise<CustomerDTO[]> {
       const response = await this._request({
           path: `/users/customers/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomerDTO[];
   }

   async exportCSV (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/users/customers/export/csv`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as void;
   }

}
