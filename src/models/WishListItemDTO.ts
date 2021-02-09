import { LangValue } from './LangValue';
import { ProductVariantDTO } from './ProductVariantDTO';
import { AttributeRuleDTO } from './AttributeRuleDTO';

export interface WishListItemDTO {
  _id: string;
  addedAt: number;
  deactivatedAt?: number;
  productName: LangValue[];
  productSlug: LangValue[];
  productVariant: ProductVariantDTO;
  attributeRules?: AttributeRuleDTO[];
  productId: string;
  variantId?: string;
  quantity?: number;
}

