import { AssetDTO } from './AssetDTO';

export interface CustomItemDraftDTO {
  name: string;
  linkUrl: string;
  tags?: string[];
  key?: string;
  assets?: AssetDTO[];
  hideOnDesktop?: boolean;
  hideOnMobile?: boolean;
}

