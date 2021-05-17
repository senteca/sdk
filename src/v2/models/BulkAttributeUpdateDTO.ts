import { ProductAttributeDraftDTO } from './ProductAttributeDraftDTO';

export interface BulkAttributeUpdateDTO {
  filter: string;
  attribute: ProductAttributeDraftDTO;
}

