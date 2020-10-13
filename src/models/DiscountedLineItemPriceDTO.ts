import { MoneyDTO } from './MoneyDTO';
import { DiscountedLineItemPortionDTO } from './DiscountedLineItemPortionDTO';

export interface DiscountedLineItemPriceDTO {
  value: MoneyDTO;
  includedDiscounts: DiscountedLineItemPortionDTO[];
}

