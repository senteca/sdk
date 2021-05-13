import { AddressDTO } from './AddressDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { CustomField } from './CustomField';

export interface CustomerDTO {
  gender?: CustomerDTOGenderEnum;
  isEmailVerified?: boolean;
  emailVerificationToken?: string;
  _id: string;
  createdAt?: number;
  updatedAt?: number;
  customerAddresses?: AddressDTO[];
  customerCompanies?: AddressDTO[];
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
  status?: CustomerDTOStatusEnum;
  locale?: string;
  phoneNumber?: string;
  anonymousId?: string;
  defaultBillingAddress?: string;
  defaultShippingAddress?: string;
  companyDetails?: AddressDTO[];
  invitationToken?: string;
  custom?: CustomField[];
}

export enum CustomerDTOGenderEnum {
    Unspecified = 0,  
    Male = 1,  
    Female = 2,  
}
export enum CustomerDTOStatusEnum {
    Active = 'active',  
    Disabled = 'disabled',  
    AwaitingApproval = 'awaiting-approval',  
    Rejected = 'rejected',  
}
