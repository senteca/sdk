import { ShippingConfigDTO } from './ShippingConfigDTO';

export interface ShippingConfigFilterResultDTO {
  results: ShippingConfigDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

