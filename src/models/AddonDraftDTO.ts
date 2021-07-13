import { AddonPageDTO } from './AddonPageDTO';

export interface AddonDraftDTO {
  version?: number;
  name: string;
  pages: AddonPageDTO[];
}

