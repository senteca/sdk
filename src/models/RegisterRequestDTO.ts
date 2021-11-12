import { AddressDraftDTO } from './AddressDraftDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { AddressDTO } from './AddressDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { CustomField } from './CustomField';

export interface RegisterRequestDTO {
  gender?: RegisterRequestDTOGenderEnum;
  responseMode?: RegisterRequestDTOResponseModeEnum;
  _id?: string;
  password: string;
  customerAddresses?: AddressDraftDTO[];
  customerCompanies?: AddressDraftDTO[];
  customerNumber?: number;
  storeKey?: string;
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
  companyDetails?: AddressDTO[];
  invitationToken?: string;
  anonymizationRequested?: boolean;
  discountCodes?: IdReferenceDTO[];
  referrer?: IdReferenceDTO;
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
    Unverified = 'unverified',  
}
