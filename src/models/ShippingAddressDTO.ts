import { AddressVerifiedDTO } from './AddressVerifiedDTO';

export interface ShippingAddressDTO {
  id?: string;
  createdAt?: number;
  updatedAt?: number;
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  region?: string;
  city: string;
  quarter?: string;
  streetName?: string;
  streetNumber?: string;
  postalCode?: string;
  building?: string;
  entrance?: string;
  floor?: string;
  apartment?: string;
  companyName?: string;
  companyId?: string;
  vatId?: string;
  additionalStreetInfo?: string;
  additionalAddressInfo?: string;
  isDefaultBillingAddress: boolean;
  isDefaultShippingAddress: boolean;
  verified: AddressVerifiedDTO;
  custom?: object;
}

