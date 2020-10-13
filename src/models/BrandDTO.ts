import { IdReferenceDTO } from './IdReferenceDTO';
import { LocalizedString } from './LocalizedString';
import { AssetDTO } from './AssetDTO';

export interface BrandDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  parent?: IdReferenceDTO;
  ancestors?: IdReferenceDTO[];
  version?: number;
  name: LocalizedString;
  description?: LocalizedString;
  weight: number;
  status: BrandDTOStatusEnum;
  assets?: AssetDTO[];
  slug: LocalizedString;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  externalId?: string;
  custom?: object;
}

export enum BrandDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
