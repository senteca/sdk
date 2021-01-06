import { WishListItemDTO } from './WishListItemDTO';

export interface WishListDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  items?: WishListItemDTO[];
  customerId?: string;
  anonymousId?: string;
}

