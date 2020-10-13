import { MoneyDTO } from './MoneyDTO';
import { DiscountPortionDTO } from './DiscountPortionDTO';

export interface SubtotalDiscountDTO {
  value: MoneyDTO;
  includedDiscounts: DiscountPortionDTO[];
}

