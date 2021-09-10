/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerDTO, CustomerUpdateDTO, PasswordChangeDTO, EmailChangeRequestDTO, EmailChangeDTO, AddressDTO, AddressDraftDTO, CustomerDraftDTO, CustomerFilterResultDTO, CustomerSearchResultDTO, SetCustomFieldDTO, EmailVerificationDTO, EmailVerificationResponseDTO, PasswordTokenDTO, PasswordResetDTO, SetCustomerGroupDTO, FilterQueryDTO } from '../../../models';

export const CustomersGetMyProfile = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-profile`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersUpdateMyProfile = async (dto: CustomerUpdateDTO): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-profile`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersDeleteMyProfile = async (): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-profile`,
        method: 'DELETE',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersAnonymizeMe = async (): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/anonymize-me`,
        method: 'PUT',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersRequestAnonymization = async (): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/request-anonymization`,
        method: 'PUT',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersChangePassword = async (dto: PasswordChangeDTO): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/password`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersRequestEmailChange = async (dto: EmailChangeRequestDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/users/customers/email/request`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const CustomersChangeEmail = async (dto: EmailChangeDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/users/customers/email`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const CustomersGetMyAddresses = async (): Promise<AddressDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-addresses`,
        method: 'GET',
    });
    return (response as unknown) as AddressDTO[];
}

export const CustomersCreateMyAddress = async (dto: AddressDraftDTO): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-addresses`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersGetMyAddressById = async (id: string): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-addresses/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersUpdateMyAddress = async (id: string, dto: AddressDraftDTO): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-addresses/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersDeleteMyAddress = async (id: string): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-addresses/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersGetMyCompanies = async (): Promise<AddressDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-companies`,
        method: 'GET',
    });
    return (response as unknown) as AddressDTO[];
}

export const CustomersCreateMyCompany = async (dto: AddressDraftDTO): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-companies`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersGetMyCompanyById = async (id: string): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-companies/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersUpdateMyCompany = async (id: string, dto: AddressDraftDTO): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-companies/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersDeleteMyCompany = async (id: string): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/my-companies/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersCreate = async (dto: CustomerDraftDTO): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomerFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CustomerFilterResultDTO;
}

export const CustomersSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<CustomerSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/search`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as CustomerSearchResultDTO;
}

export const CustomersGetByExternalId = async (externalId: string): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/externalId=${encodeURIComponent(externalId)}`,
        method: 'GET',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersGetById = async (id: string): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(id)}`,
        method: 'GET',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersUpdate = async (id: string, dto: CustomerUpdateDTO): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(id)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersDelete = async (id: string): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersAnonymize = async (id: string): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(id)}/anonymize`,
        method: 'PUT',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersVerifyEmail = async (dto: EmailVerificationDTO): Promise<EmailVerificationResponseDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/email-verify`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as EmailVerificationResponseDTO;
}

export const CustomersCreatePasswordToken = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: PasswordTokenDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/users/customers/password-token`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        contentType: 'application/json',
    });
    
}

export const CustomersResetPassword = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: PasswordResetDTO): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/password/reset`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersSetCustomerGroup = async (customerId: string, dto: SetCustomerGroupDTO): Promise<CustomerDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(customerId)}/group`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerDTO;
}

export const CustomersGetAddresses = async (customerId: string): Promise<AddressDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(customerId)}/addresses`,
        method: 'GET',
    });
    return (response as unknown) as AddressDTO[];
}

export const CustomersCreateAddress = async (customerId: string, dto: AddressDraftDTO): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(customerId)}/addresses`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersGetAddressById = async (customerId: string, addressId: string): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(customerId)}/addresses/${encodeURIComponent(addressId)}`,
        method: 'GET',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersUpdateAddress = async (customerId: string, addressId: string, dto: AddressDraftDTO): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(customerId)}/addresses/${encodeURIComponent(addressId)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersDeleteAddress = async (customerId: string, addressId: string): Promise<any> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(customerId)}/addresses/${encodeURIComponent(addressId)}`,
        method: 'DELETE',
    });
    return (response as unknown) as any;
}

export const CustomersGetCompanies = async (customerId: string): Promise<AddressDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(customerId)}/companies`,
        method: 'GET',
    });
    return (response as unknown) as AddressDTO[];
}

export const CustomersCreateCompany = async (customerId: string, dto: AddressDraftDTO): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(customerId)}/companies`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersGetCompanyById = async (customerId: string, companyId: string): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(customerId)}/companies/${encodeURIComponent(companyId)}`,
        method: 'GET',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersUpdateCompany = async (customerId: string, companyId: string, dto: AddressDraftDTO): Promise<AddressDTO> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(customerId)}/companies/${encodeURIComponent(companyId)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as AddressDTO;
}

export const CustomersDeleteCompany = async (customerId: string, companyId: string): Promise<any> => {
    const response = await HttpClient.request({
        path: `/users/customers/${encodeURIComponent(customerId)}/companies/${encodeURIComponent(companyId)}`,
        method: 'DELETE',
    });
    return (response as unknown) as any;
}

export const CustomersImport = async (dto: CustomerDraftDTO[]): Promise<CustomerDTO[]> => {
    const response = await HttpClient.request({
        path: `/users/customers/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerDTO[];
}

export const CustomersExportCSV = async (dto: FilterQueryDTO): Promise<any> => {
    const response = await HttpClient.request({
        path: `/users/customers/export/csv`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as any;
}

export const CustomersExportMyProfile = async (query?: { columnDelimiter?: string, recordDelimiter?: string, prettyKeys?: boolean, prettyValues?: boolean }): Promise<any> => {
    const response = await HttpClient.request({
        path: `/users/customers/export/my-profile`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as any;
}

export const CustomersExportMyAddresses = async (query?: { columnDelimiter?: string, recordDelimiter?: string, prettyKeys?: boolean, prettyValues?: boolean }): Promise<any> => {
    const response = await HttpClient.request({
        path: `/users/customers/export/my-addresses`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as any;
}

