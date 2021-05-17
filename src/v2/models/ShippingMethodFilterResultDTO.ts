import { ShippingMethodDTO } from './ShippingMethodDTO';

export interface ShippingMethodFilterResultDTO {
  results: ShippingMethodDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

