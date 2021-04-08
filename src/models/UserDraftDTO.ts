import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface UserDraftDTO {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  role: KeyReferenceDTO;
  passwordResetTokenExpirationDate?: number;
  isSystem: boolean;
}

