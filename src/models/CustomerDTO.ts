import { KeyReferenceDTO } from './KeyReferenceDTO';
import { AddressDTO } from './AddressDTO';
import { CustomField } from './CustomField';

export interface CustomerDTO {
  _id: string;
  createdAt?: number;
  updatedAt?: number;
  customerNumber?: number;
  store?: KeyReferenceDTO;
  email: string;
  salutation?: string;
  title?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  gender?: CustomerDTOGenderEnum;
  dayOfBirth?: number;
  monthOfBirth?: number;
  yearOfBirth?: number;
  companyName?: string;
  vatId?: string;
  externalId?: string;
  customerGroup?: KeyReferenceDTO;
  status: CustomerDTOStatusEnum;
  locale?: string;
  phoneNumber?: string;
  anonymousId?: string;
  defaultBillingAddress?: string;
  defaultShippingAddress?: string;
  customerAddresses: AddressDTO[];
  custom?: CustomField[];
  password: string;
}

export enum CustomerDTOGenderEnum {
    Unspecified = 'Unspecified',  
    Male = 'Male',  
    Female = 'Female',  
}
export enum CustomerDTOStatusEnum {
    Active = 'active',  
    Disabled = 'disabled',  
    AwaitingApproval = 'awaiting-approval',  
    Rejected = 'rejected',  
}
