import { OfferDraftDTO } from './OfferDraftDTO';
import { InventoryDTO } from './InventoryDTO';
import { ProductAttributeDTO } from './ProductAttributeDTO';
import { ImageSetDTO } from './ImageSetDTO';

export interface ProductVariantDTO {
  id: string;
  sku: string;
  masterBarcode?: string;
  barcodes: string[];
  offers: OfferDraftDTO[];
  inventories: InventoryDTO[];
  attributes: ProductAttributeDTO[];
  imageSets: ImageSetDTO[];
  weight?: number;
  unitOfWeight?: ProductVariantDTOUnitOfWeightEnum;
  length?: number;
  width?: number;
  height?: number;
  unitOfMetric?: ProductVariantDTOUnitOfMetricEnum;
}

export enum ProductVariantDTOUnitOfWeightEnum {
    Gr = 'gr',  
    Oz = 'oz',  
}
export enum ProductVariantDTOUnitOfMetricEnum {
    Cm = 'cm',  
    Inch = 'inch',  
}
