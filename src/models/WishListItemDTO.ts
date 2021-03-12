import { BrandSnapshot } from './BrandSnapshot';
import { LangValue } from './LangValue';
import { ProductVariantDTO } from './ProductVariantDTO';

export interface WishListItemDTO {
  _id: string;
  addedAt: number;
  snapshotFrom: number;
  deactivatedAt?: number;
  brandSnapshot?: BrandSnapshot;
  productName: LangValue[];
  productSlug: LangValue[];
  productVariant: ProductVariantDTO;
  productId: string;
  variantId?: string;
  collapseKey?: string;
  quantity?: number;
}

