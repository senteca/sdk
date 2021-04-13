import { CustomerSubscriptionTypeDTO } from './CustomerSubscriptionTypeDTO';

export interface CustomerSubscriptionTypeFilterResultDTO {
  results: CustomerSubscriptionTypeDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

