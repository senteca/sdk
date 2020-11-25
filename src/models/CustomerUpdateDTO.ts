import { KeyReferenceDTO } from './KeyReferenceDTO';
import { AddressDTO } from './AddressDTO';
import { CustomField } from './CustomField';

export interface CustomerUpdateDTO {
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
  gender?: CustomerUpdateDTOGenderEnum;
  dayOfBirth?: number;
  monthOfBirth?: number;
  yearOfBirth?: number;
  companyName?: string;
  vatId?: string;
  externalId?: string;
  customerGroup?: KeyReferenceDTO;
  status: CustomerUpdateDTOStatusEnum;
  locale?: string;
  phoneNumber?: string;
  anonymousId?: string;
  defaultBillingAddress?: string;
  defaultShippingAddress?: string;
  customerAddresses?: AddressDTO[];
  custom?: CustomField[];
}

export enum CustomerUpdateDTOGenderEnum {
    Unspecified = 'Unspecified',  
    Male = 'Male',  
    Female = 'Female',  
}
export enum CustomerUpdateDTOStatusEnum {
    Active = 'active',  
    Disabled = 'disabled',  
    AwaitingApproval = 'awaiting-approval',  
    Rejected = 'rejected',  
}
