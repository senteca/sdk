import { TaxRateDraftDTO } from './TaxRateDraftDTO';

export interface TaxCategoryDraftDTO {
  version?: number;
  key: string;
  name?: string;
  description?: string;
  rates: TaxRateDraftDTO[];
}

