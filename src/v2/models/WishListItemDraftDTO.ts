import { CustomField } from './CustomField';

export interface WishListItemDraftDTO {
  productId: string;
  variantId?: string;
  collapseKey?: string;
  quantity?: number;
  custom?: CustomField[];
}

