import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface UserDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  role: KeyReferenceDTO;
  passwordResetTokenExpirationDate?: number;
  isSystem: boolean;
}

