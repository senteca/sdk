import { LineItemStateForQuantityDTO } from './LineItemStateForQuantityDTO';
import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { ProductVariantDTO } from './ProductVariantDTO';
import { OfferDTO } from './OfferDTO';
import { TaxedItemPriceDTO } from './TaxedItemPriceDTO';
import { TaxRateDTO } from './TaxRateDTO';
import { MoneyDTO } from './MoneyDTO';
import { DiscountedLineItemPriceForQuantity } from './DiscountedLineItemPriceForQuantity';
import { ItemShippingDetailsDTO } from './ItemShippingDetailsDTO';

export interface LineItemImportDTO {
  id?: string;
  states: LineItemStateForQuantityDTO[];
  productId: string;
  productName?: LangValue[];
  productSlug?: LangValue[];
  productThumbnailUrl?: string;
  productCategories?: IdReferenceDTO[];
  productBrands?: IdReferenceDTO[];
  productCollections?: IdReferenceDTO[];
  productTaxCategory?: IdReferenceDTO;
  variant?: ProductVariantDTO;
  offer: OfferDTO;
  quantity: number;
  taxedPrice?: TaxedItemPriceDTO;
  taxRate?: TaxRateDTO;
  totalPrice?: MoneyDTO;
  discountedPricePerQuantity?: DiscountedLineItemPriceForQuantity[];
  lineItemMode: LineItemImportDTOLineItemModeEnum;
  shippingDetails?: ItemShippingDetailsDTO;
}

export enum LineItemImportDTOLineItemModeEnum {
    Standard = 'Standard',  
    Gift = 'Gift',  
}
