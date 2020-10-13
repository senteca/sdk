import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface CustomerRegisterFacebookDTO {
  store?: KeyReferenceDTO;
  email: string;
  firstName?: string;
  lastName?: string;
  customerNumber?: number;
  facebookId: string;
  facebookToken?: string;
}

