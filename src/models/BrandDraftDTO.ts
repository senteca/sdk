import { LocalizedString } from './LocalizedString';
import { IdReferenceDTO } from './IdReferenceDTO';
import { AssetDTO } from './AssetDTO';

export interface BrandDraftDTO {
  version?: number;
  name: LocalizedString;
  description?: LocalizedString;
  weight: number;
  parent?: IdReferenceDTO;
  ancestors?: IdReferenceDTO[];
  status: BrandDraftDTOStatusEnum;
  assets?: AssetDTO[];
  slug: LocalizedString;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  externalId?: string;
  custom?: object;
}

export enum BrandDraftDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
