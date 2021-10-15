import { MenuItemDTO } from './MenuItemDTO';

export interface MenuItemFilterResultDTO {
  results: MenuItemDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

