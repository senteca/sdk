import { ItemShippingDetailsDraftDTO } from './ItemShippingDetailsDraftDTO';
import { SelectedOptionDTO } from './SelectedOptionDTO';

export interface LineItemDraftDTO {
  productId: string;
  variantId: string;
  offerId?: string;
  quantity: number;
  shippingDetails?: ItemShippingDetailsDraftDTO;
  reserveFor?: number;
  selectedOptions?: SelectedOptionDTO[];
  collapseKey?: string;
}

