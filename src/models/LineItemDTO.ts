import { LineItemStateForQuantityDTO } from './LineItemStateForQuantityDTO';
import { LocalizedString } from './LocalizedString';
import { IdReferenceDTO } from './IdReferenceDTO';
import { ProductVariantDTO } from './ProductVariantDTO';
import { OfferDTO } from './OfferDTO';
import { TaxedItemPriceDTO } from './TaxedItemPriceDTO';
import { TaxRateDTO } from './TaxRateDTO';
import { MoneyDTO } from './MoneyDTO';
import { DiscountedLineItemPriceForQuantity } from './DiscountedLineItemPriceForQuantity';
import { ItemShippingDetailsDTO } from './ItemShippingDetailsDTO';

export interface LineItemDTO {
  updatedAt: number;
  id: string;
  states: LineItemStateForQuantityDTO[];
  productId: string;
  productName: LocalizedString;
  productSlug: LocalizedString;
  productThumbnailUrl: string;
  productCategories?: IdReferenceDTO[];
  productBrands?: IdReferenceDTO[];
  productCollections?: IdReferenceDTO[];
  productTaxCategory: IdReferenceDTO;
  variant: ProductVariantDTO;
  offer: OfferDTO;
  quantity: number;
  taxedPrice?: TaxedItemPriceDTO;
  taxRate?: TaxRateDTO;
  totalPrice?: MoneyDTO;
  discountedPricePerQuantity?: DiscountedLineItemPriceForQuantity[];
  lineItemMode: LineItemDTOLineItemModeEnum;
  shippingDetails?: ItemShippingDetailsDTO;
}

export enum LineItemDTOLineItemModeEnum {
    Standard = 'Standard',  
    Gift = 'Gift',  
}
