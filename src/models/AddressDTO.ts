import { AddressVerifiedDTO } from './AddressVerifiedDTO';
import { CustomField } from './CustomField';

export interface AddressDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
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
  isDefaultBillingAddress?: boolean;
  isDefaultShippingAddress?: boolean;
  verified: AddressVerifiedDTO;
  custom?: CustomField[];
}

