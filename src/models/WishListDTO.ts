import { KeyReferenceDTO } from './KeyReferenceDTO';
import { ProductDTO } from './ProductDTO';

export interface WishListDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  priceList: KeyReferenceDTO;
  store: KeyReferenceDTO;
  customerId?: string;
  anonymousId?: string;
  products: ProductDTO[];
}

