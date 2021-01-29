import { ProductAttributeDraftDTO } from './ProductAttributeDraftDTO';
import { OfferDraftDTO } from './OfferDraftDTO';
import { ImageDTO } from './ImageDTO';
import { ShippingDataDTO } from './ShippingDataDTO';
import { OfferDTO } from './OfferDTO';
import { InventorySnapshotDTO } from './InventorySnapshotDTO';

export interface ProductVariantDTO {
  _id: string;
  sku: string;
  masterBarcode?: string;
  barcodes?: string[];
  collapseKey?: string;
  collapseMode?: ProductVariantDTOCollapseModeEnum;
  attributes?: ProductAttributeDraftDTO[];
  offers?: OfferDraftDTO[];
  aliasImagesFrom?: string;
  images?: ImageDTO[];
  shippingData?: ShippingDataDTO;
  offer?: OfferDTO;
  inventorySnapshot?: InventorySnapshotDTO;
}

export enum ProductVariantDTOCollapseModeEnum {
    None = 'none',  
    Id = 'id',  
    Custom = 'custom',  
}
