import { SectionItemDTO } from './SectionItemDTO';
import { AssetDTO } from './AssetDTO';

export interface SectionElementDraftDTO {
  items: SectionItemDTO[];
  name: string;
  linkUrl: string;
  tags?: string[];
  key?: string;
  assets?: AssetDTO[];
  hideOnDesktop?: boolean;
  hideOnMobile?: boolean;
}

