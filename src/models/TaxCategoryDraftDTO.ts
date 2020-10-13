import { TaxRateDTO } from './TaxRateDTO';

export interface TaxCategoryDraftDTO {
  version?: number;
  key: string;
  name?: string;
  description?: string;
  rates: TaxRateDTO[];
}

