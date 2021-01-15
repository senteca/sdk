import { LangValue } from './LangValue';
import { ProductVariantDTO } from './ProductVariantDTO';

export interface WishListItemDTO {
  _id: string;
  addedAt: number;
  deactivatedAt?: number;
  productName: LangValue[];
  productSlug: LangValue[];
  productVariant: ProductVariantDTO;
  productId: string;
  variantId?: string;
  quantity?: number;
}

