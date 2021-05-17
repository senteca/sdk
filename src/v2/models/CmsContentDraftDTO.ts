import { CmsContentDataDTO } from './CmsContentDataDTO';

export interface CmsContentDraftDTO {
  version?: number;
  typeName: string;
  key?: string;
  tags: string[];
  data: CmsContentDataDTO[];
  dataSchema: any;
}

