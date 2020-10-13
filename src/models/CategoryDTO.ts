import { IdReferenceDTO } from './IdReferenceDTO';
import { LocalizedString } from './LocalizedString';
import { AssetDTO } from './AssetDTO';

export interface CategoryDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  parent?: IdReferenceDTO;
  ancestors?: IdReferenceDTO[];
  alias?: IdReferenceDTO;
  version?: number;
  name: LocalizedString;
  description?: LocalizedString;
  weight: number;
  status: CategoryDTOStatusEnum;
  assets?: AssetDTO[];
  slug: LocalizedString;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  custom?: object;
  externalId?: string;
}

export enum CategoryDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
