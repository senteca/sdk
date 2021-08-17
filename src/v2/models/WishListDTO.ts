import { WishListItemDTO } from './WishListItemDTO';
import { WishListCompactDTO } from './WishListCompactDTO';

export interface WishListDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  items?: WishListItemDTO[];
  compact?: WishListCompactDTO;
  offset?: number;
  limit?: number;
  count?: number;
  total?: number;
  customerId?: string;
  anonymousId?: string;
}

