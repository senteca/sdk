import { TaxRateDraftDTO } from './TaxRateDraftDTO';

export interface TaxCategoryDTO {
  version?: number;
  key: string;
  name?: string;
  description?: string;
  rates: TaxRateDraftDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

