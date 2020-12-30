import { OfferDraftDTO } from './OfferDraftDTO';
import { InventoryDTO } from './InventoryDTO';
import { ProductAttributeDTO } from './ProductAttributeDTO';
import { ImageSetDTO } from './ImageSetDTO';

export interface ProductVariantDraftDTO {
  id: string;
  sku: string;
  masterBarcode?: string;
  barcodes: string[];
  offers: OfferDraftDTO[];
  inventories: InventoryDTO[];
  attributes: ProductAttributeDTO[];
  imageSets: ImageSetDTO[];
  weight?: number;
  unitOfWeight?: ProductVariantDraftDTOUnitOfWeightEnum;
  length?: number;
  width?: number;
  height?: number;
  unitOfMetric?: ProductVariantDraftDTOUnitOfMetricEnum;
}

export enum ProductVariantDraftDTOUnitOfWeightEnum {
    Gr = 'gr',  
    Oz = 'oz',  
}
export enum ProductVariantDraftDTOUnitOfMetricEnum {
    Cm = 'cm',  
    Inch = 'inch',  
}
