import { BaseAPI } from '../../runtime';
import { CustomerDTO } from '../../models/CustomerDTO';
import { CustomerUpdateDTO } from '../../models/CustomerUpdateDTO';
import { PasswordChangeDTO } from '../../models/PasswordChangeDTO';
import { AddressDTO } from '../../models/AddressDTO';
import { CustomerCreateDTO } from '../../models/CustomerCreateDTO';
import { CustomerRegisterDTO } from '../../models/CustomerRegisterDTO';
import { CustomerRegisterFacebookDTO } from '../../models/CustomerRegisterFacebookDTO';
import { PasswordTokenDTO } from '../../models/PasswordTokenDTO';
import { PasswordResetDTO } from '../../models/PasswordResetDTO';

export class CustomersAPI extends BaseAPI {
   async getCustomerProfile (): Promise<CustomerDTO> {
       const response = await this.request({
           path: `/users/customers/profile`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async updateCustomerProfile (dto: CustomerUpdateDTO): Promise<CustomerDTO> {
       const response = await this.request({
           path: `/users/customers/profile`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async deleteCustomerProfile (): Promise<CustomerDTO> {
       const response = await this.request({
           path: `/users/customers/profile`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async changeCustomerPassword (dto: PasswordChangeDTO): Promise<CustomerDTO> {
       const response = await this.request({
           path: `/users/customers/password`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async getMyAddresses (): Promise<AddressDTO[]> {
       const response = await this.request({
           path: `/users/customers/my-addresses`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as AddressDTO[];
   }

   async createMyAddress (dto: AddressDTO): Promise<AddressDTO> {
       const response = await this.request({
           path: `/users/customers/my-addresses`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async findMyAddressById (addressId: string): Promise<AddressDTO> {
       const response = await this.request({
           path: `/users/customers/my-addresses/${addressId}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async updateMyAddressById (addressId: string, dto: AddressDTO): Promise<AddressDTO> {
       const response = await this.request({
           path: `/users/customers/my-addresses/${addressId}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async deleteMyAddressById (addressId: string): Promise<AddressDTO> {
       const response = await this.request({
           path: `/users/customers/my-addresses/${addressId}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async createCustomer (dto: CustomerCreateDTO): Promise<CustomerDTO> {
       const response = await this.request({
           path: `/users/customers`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async filterCustomers (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/users/customers`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async searchCustomers (query: { expand: string, language: string, term: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/users/customers/search`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async findCustomerById (id: string): Promise<CustomerDTO> {
       const response = await this.request({
           path: `/users/customers/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async updateCustomerById (id: string, dto: CustomerUpdateDTO): Promise<CustomerDTO> {
       const response = await this.request({
           path: `/users/customers/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async deleteCustomerById (id: string): Promise<object> {
       const response = await this.request({
           path: `/users/customers/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as object;
   }

   async registerCustomer (dto: CustomerRegisterDTO): Promise<object> {
       const response = await this.request({
           path: `/users/customers/register`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as object;
   }

   async registerCustomerViaFacebook (dto: CustomerRegisterFacebookDTO): Promise<object> {
       const response = await this.request({
           path: `/users/customers/register/facebook`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as object;
   }

   async requestCustomerPasswordToken (dto: PasswordTokenDTO): Promise<object> {
       const response = await this.request({
           path: `/users/customers/password-token`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as object;
   }

   async resetCustomerPassword (dto: PasswordResetDTO): Promise<CustomerDTO> {
       const response = await this.request({
           path: `/users/customers/password/reset`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as CustomerDTO;
   }

   async getCustomerAddresses (customerId: string): Promise<AddressDTO[]> {
       const response = await this.request({
           path: `/users/customers/${customerId}/addresses`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as AddressDTO[];
   }

   async createCustomerAddress (customerId: string, dto: AddressDTO): Promise<AddressDTO> {
       const response = await this.request({
           path: `/users/customers/${customerId}/addresses`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async findCustomerAddressById (customerId: string, addressId: string): Promise<AddressDTO> {
       const response = await this.request({
           path: `/users/customers/${customerId}/addresses/${addressId}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async updateCustomerAddressById (customerId: string, addressId: string, dto: AddressDTO): Promise<AddressDTO> {
       const response = await this.request({
           path: `/users/customers/${customerId}/addresses/${addressId}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as AddressDTO;
   }

   async deleteCustomerAddressById (customerId: string, addressId: string): Promise<object> {
       const response = await this.request({
           path: `/users/customers/${customerId}/addresses/${addressId}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as object;
   }

   async importCustomers (dto: string[]): Promise<CustomerDTO[]> {
       const response = await this.request({
           path: `/users/customers/import`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as CustomerDTO[];
   }

   async exportCustomersCSV (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/users/customers/export/csv`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

}
