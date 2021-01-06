import { ItemShippingDetailsDraftDTO } from './ItemShippingDetailsDraftDTO';

export interface LineItemDraftDTO {
  productId: string;
  variantId: string;
  merchantKey: string;
  quantity: number;
  shippingDetails?: ItemShippingDetailsDraftDTO;
}

