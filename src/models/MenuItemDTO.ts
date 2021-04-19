import { SectionElementDTO } from './SectionElementDTO';
import { CustomItemDTO } from './CustomItemDTO';
import { AssetDTO } from './AssetDTO';

export interface MenuItemDTO {
  version?: number;
  sections?: SectionElementDTO[];
  items?: CustomItemDTO[];
  createdAt: number;
  updatedAt: number;
  name: string;
  linkUrl: string;
  tags?: string[];
  key?: string;
  assets?: AssetDTO[];
  hideOnDesktop?: boolean;
  hideOnMobile?: boolean;
  _id: string;
}

