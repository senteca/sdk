import { LocalizedString } from './LocalizedString';
import { AssetSourceDTO } from './AssetSourceDTO';

export interface AssetDTO {
  key?: string;
  name: LocalizedString;
  link?: string;
  sources: AssetSourceDTO[];
  description?: LocalizedString;
  tags?: string[];
  custom?: object;
}

