import { SectionElementDTO } from './SectionElementDTO';
import { CustomItemDTO } from './CustomItemDTO';
import { AssetDTO } from './AssetDTO';

export interface MenuItemDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  sections?: SectionElementDTO[];
  items?: CustomItemDTO[];
  name: string;
  linkUrl?: string;
  tags?: string[];
  key?: string;
  interfaceKey: string;
  assets?: AssetDTO[];
  hideOnDesktop?: boolean;
  hideOnMobile?: boolean;
}

