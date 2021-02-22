import { KeyReferenceDTO } from './KeyReferenceDTO';
import { AddressDTO } from './AddressDTO';
import { CustomField } from './CustomField';

export interface RegisterRequestDTO {
  gender?: RegisterRequestDTOGenderEnum;
  responseMode?: RegisterRequestDTOResponseModeEnum;
  password: string;
  customerNumber?: number;
  store?: KeyReferenceDTO;
  email: string;
  salutation?: string;
  title?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  dayOfBirth?: number;
  monthOfBirth?: number;
  yearOfBirth?: number;
  companyName?: string;
  vatId?: string;
  externalId?: string;
  customerGroup?: KeyReferenceDTO;
  status?: RegisterRequestDTOStatusEnum;
  locale?: string;
  phoneNumber?: string;
  anonymousId?: string;
  defaultBillingAddress?: string;
  defaultShippingAddress?: string;
  customerAddresses?: AddressDTO[];
  customerCompanies?: AddressDTO[];
  companyDetails?: AddressDTO[];
  invitationToken?: string;
  custom?: CustomField[];
}

export enum RegisterRequestDTOGenderEnum {
    Unspecified = 0,  
    Male = 1,  
    Female = 2,  
}
export enum RegisterRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
export enum RegisterRequestDTOStatusEnum {
    Active = 'active',  
    Disabled = 'disabled',  
    AwaitingApproval = 'awaiting-approval',  
    Rejected = 'rejected',  
}
