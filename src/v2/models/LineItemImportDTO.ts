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

export interface LineItemImportDTO {
  _id?: string;
  addedAt?: number;
  snapshotFrom?: number;
  updatedAt?: number;
  status?: LineItemImportDTOStatusEnum;
  priceChanged?: boolean;
  states: LineItemStateForQuantityDTO[];
  productId: string;
  productName?: LangValue[];
  productSlug?: LangValue[];
  productThumbnailUrl?: string;
  productCategories?: IdReferenceDTO[];
  productBrands?: IdReferenceDTO[];
  productCollections?: IdReferenceDTO[];
  productTaxCategory?: KeyReferenceDTO;
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

export enum LineItemImportDTOStatusEnum {
    CanPurchase = 'CanPurchase',  
    SoldOut = 'SoldOut',  
    NotEnoughQuantity = 'NotEnoughQuantity',  
    NoVariant = 'NoVariant',  
    NoOffer = 'NoOffer',  
}
export enum LineItemImportDTOLineItemModeEnum {
    Standard = 'Standard',  
    Gift = 'Gift',  
}
