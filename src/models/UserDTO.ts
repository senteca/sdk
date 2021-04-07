import { KeyReferenceDTO } from './KeyReferenceDTO';
import { UserSearchHistoryDTO } from './UserSearchHistoryDTO';

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
  searchHistory?: UserSearchHistoryDTO[];
}

