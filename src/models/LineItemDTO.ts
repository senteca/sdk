import { LineItemStateForQuantityDTO } from './LineItemStateForQuantityDTO';
import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { ProductVariantDTO } from './ProductVariantDTO';
import { BrandSnapshot } from './BrandSnapshot';
import { OfferDTO } from './OfferDTO';
import { TaxedItemPriceDTO } from './TaxedItemPriceDTO';
import { TaxRateDTO } from './TaxRateDTO';
import { MoneyDTO } from './MoneyDTO';
import { ProductRelationsDTO } from './ProductRelationsDTO';
import { DiscountedLineItemPriceForQuantity } from './DiscountedLineItemPriceForQuantity';
import { ItemShippingDetailsDTO } from './ItemShippingDetailsDTO';
import { ReservationDTO } from './ReservationDTO';
import { CustomField } from './CustomField';

export interface LineItemDTO {
  _id: string;
  addedAt: number;
  snapshotFrom: number;
  updatedAt: number;
  status: LineItemDTOStatusEnum;
  priceChanged: boolean;
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
  brandSnapshot?: BrandSnapshot;
  offer: OfferDTO;
  quantity: number;
  taxedPrice?: TaxedItemPriceDTO;
  taxRate?: TaxRateDTO;
  totalPrice?: MoneyDTO;
  relations?: ProductRelationsDTO;
  discountedPricePerQuantity?: DiscountedLineItemPriceForQuantity[];
  lineItemMode: LineItemDTOLineItemModeEnum;
  shippingDetails?: ItemShippingDetailsDTO;
  reservations?: ReservationDTO[];
  reservedUntil?: number;
  collapseKey?: string;
  custom?: CustomField[];
}

export enum LineItemDTOStatusEnum {
    CanPurchase = 'CanPurchase',  
    SoldOut = 'SoldOut',  
    NotEnoughQuantity = 'NotEnoughQuantity',  
    NoVariant = 'NoVariant',  
    NoOffer = 'NoOffer',  
}
export enum LineItemDTOLineItemModeEnum {
    Standard = 'Standard',  
    Gift = 'Gift',  
}
