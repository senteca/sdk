import { ProductLabelDTO } from './ProductLabelDTO';

export interface BulkLabelAddDTO {
  filter: string;
  productLabel: ProductLabelDTO;
}

