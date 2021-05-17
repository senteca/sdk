import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface UserUpdateDTO {
  firstName: string;
  middleName?: string;
  lastName?: string;
  email: string;
  role: KeyReferenceDTO;
}

