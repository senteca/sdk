import { CompanyDetailsDTO } from './CompanyDetailsDTO';
import { AddressVerifiedDTO } from './AddressVerifiedDTO';
import { CustomField } from './CustomField';

export interface AddressDraftDTO {
  version?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  countryCode: string;
  region?: string;
  city?: string;
  quarter?: string;
  streetName?: string;
  streetNumber?: string;
  postalCode?: string;
  building?: string;
  entrance?: string;
  floor?: string;
  apartment?: string;
  company?: CompanyDetailsDTO;
  additionalStreetInfo?: string;
  additionalAddressInfo?: string;
  isDefaultBillingAddress?: boolean;
  isDefaultShippingAddress?: boolean;
  verified: AddressVerifiedDTO;
  custom?: CustomField[];
}

