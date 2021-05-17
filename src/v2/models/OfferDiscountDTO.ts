import { MoneyDTO } from './MoneyDTO';

export interface OfferDiscountDTO {
  discountKey: string;
  priority: number;
  validFrom: number;
  validTo: number;
  price: MoneyDTO;
}

