import { CustomerConsentLogDTO } from './CustomerConsentLogDTO';

export interface CustomerConsentLogFilterResultDTO {
  results: CustomerConsentLogDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

