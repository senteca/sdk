import { CmsContentDataDTO } from './CmsContentDataDTO';

export interface CmsContentDraftDTO {
  version?: number;
  typeName: string;
  tags: string[];
  data: CmsContentDataDTO[];
}

