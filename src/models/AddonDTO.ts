import { AddonPageDTO } from './AddonPageDTO';

export interface AddonDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  name: string;
  pages: AddonPageDTO[];
  settings: any;
}

