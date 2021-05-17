import { IdReferenceDTO } from './IdReferenceDTO';

export interface FolderDraftDTO {
  version?: number;
  parent?: IdReferenceDTO;
  name: string;
  weight: number;
  description?: string;
}

