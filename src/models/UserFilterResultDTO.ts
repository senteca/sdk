import { UserDTO } from './UserDTO';

export interface UserFilterResultDTO {
  results: UserDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

