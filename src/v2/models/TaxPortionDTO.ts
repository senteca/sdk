import { MoneyDTO } from './MoneyDTO';

export interface TaxPortionDTO {
  name: string;
  rate: number;
  amount: MoneyDTO;
}

