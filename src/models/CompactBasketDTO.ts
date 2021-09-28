import { TaxedPriceDTO } from './TaxedPriceDTO';

export interface CompactBasketDTO {
  lineItemsCount: number;
  lineItemsTotalQuantity: number;
  customLineItemsCount: number;
  customLineItemsTotalQuantity: number;
  grandTaxedPrice?: TaxedPriceDTO;
  cartId?: string;
}

