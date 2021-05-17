import { TaxRateDTO } from './TaxRateDTO';

export interface TaxCategoryDTO {
  version?: number;
  key: string;
  name?: string;
  description?: string;
  rates: TaxRateDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}
