import { MoneyDTO } from './MoneyDTO';
import { IdReferenceDTO } from './IdReferenceDTO';

export interface CartDiscountValueDTO {
  type: string;
  permyriad?: number;
  money?: MoneyDTO[];
  product?: IdReferenceDTO;
  variantId?: string;
  quantity?: number;
}

