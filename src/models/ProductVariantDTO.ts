import { OfferDTO } from './OfferDTO';
import { ProductAttributeDTO } from './ProductAttributeDTO';
import { ImageDTO } from './ImageDTO';
import { ShippingDataDTO } from './ShippingDataDTO';
import { OptionDefinitionDTO } from './OptionDefinitionDTO';
import { SelectedOptionDTO } from './SelectedOptionDTO';
import { InventorySnapshotDTO } from './InventorySnapshotDTO';
import { InventoryDTO } from './InventoryDTO';
import { LangValue } from './LangValue';
import { ContentDTO } from './ContentDTO';
import { ProductVariantLabelDTO } from './ProductVariantLabelDTO';
import { CustomField } from './CustomField';

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
  isActive?: boolean;
  name?: LangValue[];
  description?: LangValue[];
  content?: ContentDTO[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  labels?: ProductVariantLabelDTO[];
  custom?: CustomField[];
}

export enum ProductVariantDTOCollapseModeEnum {
    None = 'none',  
    Id = 'id',  
    Custom = 'custom',  
}
