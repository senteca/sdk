import { MoneyDTO } from './MoneyDTO';

export interface ProductDiscountValueDTO {
  type: string;
  permyriad: number;
  money: MoneyDTO[];
}

