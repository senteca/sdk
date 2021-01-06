import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';

export interface BrandDraftDTO {
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  weight: number;
  parent?: IdReferenceDTO;
  ancestors?: IdReferenceDTO[];
  status: BrandDraftDTOStatusEnum;
  assets?: AssetDTO[];
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  externalId?: string;
  custom?: CustomField[];
}

export enum BrandDraftDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
