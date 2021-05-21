import { AddressDTO } from './AddressDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { CustomField } from './CustomField';
import { ProductSubscriptionDTO } from './ProductSubscriptionDTO';

export interface CustomerDraftDTO {
  gender?: CustomerDraftDTOGenderEnum;
  password: string;
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
  status?: CustomerDraftDTOStatusEnum;
  locale?: string;
  phoneNumber?: string;
  anonymousId?: string;
  defaultBillingAddress?: string;
  defaultShippingAddress?: string;
  companyDetails?: AddressDTO[];
  invitationToken?: string;
  custom?: CustomField[];
  productSubscriptions?: ProductSubscriptionDTO[];
}

export enum CustomerDraftDTOGenderEnum {
    Unspecified = 0,  
    Male = 1,  
    Female = 2,  
}
export enum CustomerDraftDTOStatusEnum {
    Active = 'active',  
    Disabled = 'disabled',  
    AwaitingApproval = 'awaiting-approval',  
    Rejected = 'rejected',  
}
