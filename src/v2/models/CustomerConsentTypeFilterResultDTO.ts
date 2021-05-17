import { CustomerConsentTypeDTO } from './CustomerConsentTypeDTO';

export interface CustomerConsentTypeFilterResultDTO {
  results: CustomerConsentTypeDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

