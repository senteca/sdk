import { CompanyDetailsDTO } from './CompanyDetailsDTO';
import { AddressModuleDataDTO } from './AddressModuleDataDTO';
import { CustomField } from './CustomField';

export interface AddressDraftDTO {
  _id?: string;
  version?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  countryCode?: string;
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
  moduleData?: AddressModuleDataDTO[];
  custom?: CustomField[];
}
