import { TaxedPriceDTO } from './TaxedPriceDTO';

export interface CompactBasketDTO {
  lineItemsCount: number;
  customLineItemsCount: number;
  grandTaxedPrice?: TaxedPriceDTO;
}

