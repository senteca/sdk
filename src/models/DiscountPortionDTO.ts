import { IdReferenceDTO } from './IdReferenceDTO';
import { MoneyDTO } from './MoneyDTO';

export interface DiscountPortionDTO {
  discount: IdReferenceDTO;
  discountedAmount: MoneyDTO;
}

