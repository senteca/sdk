import { MoneyDTO } from './MoneyDTO';
import { TaxPortionDTO } from './TaxPortionDTO';

export interface TaxedPriceDTO {
  totalNet: MoneyDTO;
  totalGross: MoneyDTO;
  taxPortions: TaxPortionDTO[];
}

