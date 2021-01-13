import { ItemShippingDetailsDraftDTO } from './ItemShippingDetailsDraftDTO';

export interface LineItemDraftDTO {
  productId: string;
  variantId: string;
  offerId: string;
  quantity: number;
  shippingDetails?: ItemShippingDetailsDraftDTO;
  reserveFor?: number;
}

