import { IdReferenceDTO } from './IdReferenceDTO';
import { MoneyDTO } from './MoneyDTO';

export interface DiscountedLineItemPortionDTO {
  discount: IdReferenceDTO;
  discountedAmount: MoneyDTO;
}

