import { ContentDataDTO } from './ContentDataDTO';

export interface ContentDraftDTO {
  version?: number;
  typeName: string;
  tags: string[];
  data: ContentDataDTO[];
}

