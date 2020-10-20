import { IdReferenceDTO } from './IdReferenceDTO';

export interface UserDTO {
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  role: IdReferenceDTO;
  passwordResetTokenExpirationDate?: number;
  isSystem: boolean;
}

