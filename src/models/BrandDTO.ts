import { IdReferenceDTO } from './IdReferenceDTO';
import { LangValue } from './LangValue';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';

export interface BrandDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  parent?: IdReferenceDTO;
  ancestors?: IdReferenceDTO[];
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  weight: number;
  status: BrandDTOStatusEnum;
  assets?: AssetDTO[];
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  externalId?: string;
  custom?: CustomField[];
}

export enum BrandDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
