import { IdReferenceDTO } from './IdReferenceDTO';

export interface FolderDTO {
  version?: number;
  parent?: IdReferenceDTO;
  name: string;
  weight: number;
  description?: string;
  _id: object;
  createdAt: number;
  updatedAt: number;
}

