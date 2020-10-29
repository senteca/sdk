import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';

export interface CategoryDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  weight: number;
  parent?: IdReferenceDTO;
  ancestors?: IdReferenceDTO[];
  alias?: IdReferenceDTO;
  status: CategoryDTOStatusEnum;
  assets?: AssetDTO[];
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  custom?: CustomField[];
  externalId?: string;
}

export enum CategoryDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
