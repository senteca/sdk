import { LocalizedString } from './LocalizedString';
import { IdReferenceDTO } from './IdReferenceDTO';
import { AssetDTO } from './AssetDTO';

export interface CategoryDraftDTO {
  version?: number;
  name: LocalizedString;
  description?: LocalizedString;
  weight: number;
  parent?: IdReferenceDTO;
  ancestors?: IdReferenceDTO[];
  alias?: IdReferenceDTO;
  status: CategoryDraftDTOStatusEnum;
  assets?: AssetDTO[];
  slug: LocalizedString;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  custom?: object;
  externalId?: string;
}

export enum CategoryDraftDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
