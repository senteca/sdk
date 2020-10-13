import { KeyReferenceDTO } from './KeyReferenceDTO';
import { AddressDTO } from './AddressDTO';

export interface CustomerDTO {
  customerNumber: number;
  store?: KeyReferenceDTO;
  email: string;
  salutation?: string;
  title?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  gender?: number;
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
  anonymousId: string;
  defaultBillingAddress: string;
  defaultShippingAddress: string;
  customerAddresses: AddressDTO[];
  passwordResetToken: string;
  passwordResetTokenExpirationDate: number;
  custom: object;
}

export enum CustomerDTOStatusEnum {
    Active = 'active',  
    Disabled = 'disabled',  
    AwaitingApproval = 'awaiting-approval',  
    Rejected = 'rejected',  
}
