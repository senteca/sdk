import { AddonPageDTO } from './AddonPageDTO';
import { SetAddonDataDTO } from './SetAddonDataDTO';

export interface AddonDraftDTO {
  version?: number;
  name: string;
  pages: AddonPageDTO[];
  settings: SetAddonDataDTO[];
}

