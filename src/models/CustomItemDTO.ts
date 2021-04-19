import { AssetDTO } from './AssetDTO';

export interface CustomItemDTO {
  _id: string;
  name: string;
  linkUrl: string;
  tags?: string[];
  key?: string;
  assets?: AssetDTO[];
  hideOnDesktop?: boolean;
  hideOnMobile?: boolean;
}

