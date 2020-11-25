import { KeyReferenceDTO } from './KeyReferenceDTO';
import { AddressDTO } from './AddressDTO';
import { CustomField } from './CustomField';

export interface CustomerDraftDTO {
  customerNumber?: number;
  store?: KeyReferenceDTO;
  email: string;
  salutation?: string;
  title?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  gender?: CustomerDraftDTOGenderEnum;
  dayOfBirth?: number;
  monthOfBirth?: number;
  yearOfBirth?: number;
  companyName?: string;
  vatId?: string;
  externalId?: string;
  customerGroup?: KeyReferenceDTO;
  status: CustomerDraftDTOStatusEnum;
  locale?: string;
  phoneNumber?: string;
  anonymousId?: string;
  defaultBillingAddress?: string;
  defaultShippingAddress?: string;
  customerAddresses?: AddressDTO[];
  custom?: CustomField[];
  password: string;
}

export enum CustomerDraftDTOGenderEnum {
    Unspecified = 'Unspecified',  
    Male = 'Male',  
    Female = 'Female',  
}
export enum CustomerDraftDTOStatusEnum {
    Active = 'active',  
    Disabled = 'disabled',  
    AwaitingApproval = 'awaiting-approval',  
    Rejected = 'rejected',  
}
