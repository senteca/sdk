import { KeyReferenceDTO } from './KeyReferenceDTO';
import { AddressDTO } from './AddressDTO';
import { CustomField } from './CustomField';
import { ProductSubscriptionDTO } from './ProductSubscriptionDTO';

export interface CustomerUpdateDTO {
  gender?: CustomerUpdateDTOGenderEnum;
  _id: string;
  createdAt?: number;
  updatedAt?: number;
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
  status?: CustomerUpdateDTOStatusEnum;
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

export enum CustomerUpdateDTOGenderEnum {
    Unspecified = 0,  
    Male = 1,  
    Female = 2,  
}
export enum CustomerUpdateDTOStatusEnum {
    Active = 'active',  
    Disabled = 'disabled',  
    AwaitingApproval = 'awaiting-approval',  
    Rejected = 'rejected',  
}
