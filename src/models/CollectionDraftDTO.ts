import { LocalizedString } from './LocalizedString';
import { AssetDTO } from './AssetDTO';

export interface CollectionDraftDTO {
  version?: number;
  name: LocalizedString;
  description?: LocalizedString;
  validFrom?: number;
  validTo?: number;
  assets?: AssetDTO[];
  slug: LocalizedString;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  custom?: object;
  externalId?: string;
}

