import { OfferDTO } from './OfferDTO';
import { ProductAttributeDTO } from './ProductAttributeDTO';
import { ImageDTO } from './ImageDTO';
import { ShippingDataDTO } from './ShippingDataDTO';
import { OptionDefinitionDTO } from './OptionDefinitionDTO';
import { SelectedOptionDTO } from './SelectedOptionDTO';
import { InventorySnapshotDTO } from './InventorySnapshotDTO';
import { InventoryDTO } from './InventoryDTO';

export interface ProductVariantDTO {
  offer?: OfferDTO;
  offers: OfferDTO[];
  attributes: ProductAttributeDTO[];
  _id: string;
  sku: string;
  masterBarcode?: string;
  barcodes?: string[];
  collapseKey?: string;
  collapseMode?: ProductVariantDTOCollapseModeEnum;
  aliasImagesFrom?: string;
  images?: ImageDTO[];
  shippingData?: ShippingDataDTO;
  availableOptions?: OptionDefinitionDTO[];
  selectedOptions?: SelectedOptionDTO[];
  inventorySnapshot?: InventorySnapshotDTO;
  inventories?: InventoryDTO[];
}

export enum ProductVariantDTOCollapseModeEnum {
    None = 'none',  
    Id = 'id',  
    Custom = 'custom',  
}
