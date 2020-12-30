import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface WishListDraftDTO {
  priceList: KeyReferenceDTO;
  store: KeyReferenceDTO;
  customerId?: string;
  anonymousId?: string;
}

