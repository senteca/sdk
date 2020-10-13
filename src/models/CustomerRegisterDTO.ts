import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface CustomerRegisterDTO {
  store?: KeyReferenceDTO;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  customerNumber?: number;
}

