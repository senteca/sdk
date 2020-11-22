import { KeyReferenceDTO } from './KeyReferenceDTO';
import { ProductDTO } from './ProductDTO';

export interface WishListDTO {
  priceList: KeyReferenceDTO;
  store: KeyReferenceDTO;
  customerId?: string;
  anonymousId?: string;
  _id: string;
  createdAt: number;
  updatedAt: number;
  products: ProductDTO[];
}

