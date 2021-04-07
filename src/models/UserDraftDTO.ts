import { KeyReferenceDTO } from './KeyReferenceDTO';
import { UserSearchHistoryDTO } from './UserSearchHistoryDTO';

export interface UserDraftDTO {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  role: KeyReferenceDTO;
  passwordResetTokenExpirationDate?: number;
  isSystem: boolean;
  searchHistory?: UserSearchHistoryDTO[];
}

