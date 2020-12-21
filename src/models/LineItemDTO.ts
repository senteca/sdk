import { LineItemStateForQuantityDTO } from './LineItemStateForQuantityDTO';
import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { ProductVariantDTO } from './ProductVariantDTO';
import { OfferDTO } from './OfferDTO';
import { TaxedItemPriceDTO } from './TaxedItemPriceDTO';
import { TaxRateDTO } from './TaxRateDTO';
import { MoneyDTO } from './MoneyDTO';
import { DiscountedLineItemPriceForQuantity } from './DiscountedLineItemPriceForQuantity';
import { ItemShippingDetailsDTO } from './ItemShippingDetailsDTO';
import { ReservationDTO } from './ReservationDTO';

export interface LineItemDTO {
  updatedAt: number;
  _id: string;
  states: LineItemStateForQuantityDTO[];
  productId: string;
  productName: LangValue[];
  productSlug: LangValue[];
  productThumbnailUrl: string;
  productCategories?: IdReferenceDTO[];
  productBrands?: IdReferenceDTO[];
  productCollections?: IdReferenceDTO[];
  productTaxCategory: KeyReferenceDTO;
  variant: ProductVariantDTO;
  offer: OfferDTO;
  quantity: number;
  taxedPrice?: TaxedItemPriceDTO;
  taxRate?: TaxRateDTO;
  totalPrice?: MoneyDTO;
  discountedPricePerQuantity?: DiscountedLineItemPriceForQuantity[];
  lineItemMode: LineItemDTOLineItemModeEnum;
  shippingDetails?: ItemShippingDetailsDTO;
  reservations?: ReservationDTO[];
  reservedUntil?: number;
}

export enum LineItemDTOLineItemModeEnum {
    Standard = 'Standard',  
    Gift = 'Gift',  
}
