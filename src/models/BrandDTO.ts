import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';

export interface BrandDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  weight: number;
  parent?: IdReferenceDTO;
  ancestors?: IdReferenceDTO[];
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
