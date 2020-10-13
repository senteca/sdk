import { LocalizedString } from './LocalizedString';
import { FilterStateDTO } from './FilterStateDTO';
import { AssetDTO } from './AssetDTO';

export interface ViewDraftDTO {
  version?: number;
  name: LocalizedString;
  description?: LocalizedString;
  filters: FilterStateDTO[];
  assets?: AssetDTO[];
  slug: LocalizedString;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  custom?: object;
}

