import { KeyReferenceDTO } from './KeyReferenceDTO';
import { CustomField } from './CustomField';

export interface CustomerCreateDTO {
  store?: KeyReferenceDTO;
  email: string;
  password: string;
  salutation?: string;
  title?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  gender: CustomerCreateDTOGenderEnum;
  dayOfBirth?: number;
  monthOfBirth?: number;
  yearOfBirth?: number;
  companyName?: string;
  vatId?: string;
  externalId?: string;
  customerGroup?: KeyReferenceDTO;
  status: CustomerCreateDTOStatusEnum;
  locale?: string;
  phoneNumber?: string;
  customerNumber?: number;
  custom?: CustomField[];
}

export enum CustomerCreateDTOGenderEnum {
    Unspecified = 'Unspecified',  
    Male = 'Male',  
    Female = 'Female',  
}
export enum CustomerCreateDTOStatusEnum {
    Active = 'active',  
    Disabled = 'disabled',  
    AwaitingApproval = 'awaiting-approval',  
    Rejected = 'rejected',  
}
