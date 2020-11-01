import { CmsContentDataDTO } from './CmsContentDataDTO';

export interface CmsContentDTO {
  version?: number;
  typeName: string;
  tags: string[];
  data: CmsContentDataDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}
