import { OfferDTO } from './OfferDTO';
import { ProductAttributeDTO } from './ProductAttributeDTO';
import { InventorySnapshotDTO } from './InventorySnapshotDTO';
import { ImageDTO } from './ImageDTO';
import { ShippingDataDTO } from './ShippingDataDTO';

export interface ProductVariantDTO {
  offer?: OfferDTO;
  offers: OfferDTO[];
  attributes: ProductAttributeDTO[];
  inventorySnapshot?: InventorySnapshotDTO;
  _id: string;
  sku: string;
  masterBarcode?: string;
  barcodes?: string[];
  collapseKey?: string;
  collapseMode?: ProductVariantDTOCollapseModeEnum;
  aliasImagesFrom?: string;
  images?: ImageDTO[];
  shippingData?: ShippingDataDTO;
}

export enum ProductVariantDTOCollapseModeEnum {
    None = 'none',  
    Id = 'id',  
    Custom = 'custom',  
}
