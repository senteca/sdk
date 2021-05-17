import { FolderDTO } from './FolderDTO';

export interface FolderFilterResultDTO {
  results: FolderDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

