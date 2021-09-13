import { CmsContentDataDTO } from './CmsContentDataDTO';

export interface CmsContentImportDTO {
  version?: number;
  typeName: string;
  key?: string;
  tags: string[];
  data: CmsContentDataDTO[];
  dataSchema: any;
  _id?: string;
  createdAt: number;
  updatedAt: number;
}

