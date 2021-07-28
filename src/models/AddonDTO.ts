import { AddonPageDTO } from './AddonPageDTO';
import { SetAddonDataDTO } from './SetAddonDataDTO';

export interface AddonDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  name: string;
  pages: AddonPageDTO[];
  settings: SetAddonDataDTO[];
}

