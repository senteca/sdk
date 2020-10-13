import { MoneyDTO } from './MoneyDTO';

export interface TaxedItemPriceDTO {
  totalNet: MoneyDTO;
  totalGross: MoneyDTO;
}

