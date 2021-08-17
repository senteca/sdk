import { MoneyDTO } from './MoneyDTO';
import { TaxedPriceDTO } from './TaxedPriceDTO';
import { TaxRateDTO } from './TaxRateDTO';

export interface ShippingFeesDTO {
  price?: MoneyDTO;
  taxedPrice?: TaxedPriceDTO;
  taxRate: TaxRateDTO;
}

