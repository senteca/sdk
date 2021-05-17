import { RoleDTO } from './RoleDTO';

export interface RoleFilterResultDTO {
  results: RoleDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

