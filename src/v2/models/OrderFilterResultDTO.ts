import { OrderDTO } from './OrderDTO';

export interface OrderFilterResultDTO {
  results: OrderDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

