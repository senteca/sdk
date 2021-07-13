import { AddonDTO } from './AddonDTO';

export interface AddonFilterResultDTO {
  results: AddonDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

