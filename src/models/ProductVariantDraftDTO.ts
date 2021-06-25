import { ProductAttributeDraftDTO } from './ProductAttributeDraftDTO';
import { OfferDraftDTO } from './OfferDraftDTO';
import { ImageDTO } from './ImageDTO';
import { ShippingDataDTO } from './ShippingDataDTO';
import { OptionDefinitionDTO } from './OptionDefinitionDTO';
import { InventoryDraftDTO } from './InventoryDraftDTO';
import { LangValue } from './LangValue';
import { ContentDTO } from './ContentDTO';

export interface ProductVariantDraftDTO {
  _id: string;
  sku: string;
  masterBarcode?: string;
  barcodes?: string[];
  collapseKey?: string;
  collapseMode?: ProductVariantDraftDTOCollapseModeEnum;
  attributes?: ProductAttributeDraftDTO[];
  offers?: OfferDraftDTO[];
  aliasImagesFrom?: string;
  images?: ImageDTO[];
  shippingData?: ShippingDataDTO;
  availableOptions?: OptionDefinitionDTO[];
  inventories?: InventoryDraftDTO[];
  name?: LangValue[];
  description?: LangValue[];
  content?: ContentDTO[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
}

export enum ProductVariantDraftDTOCollapseModeEnum {
    None = 'none',  
    Id = 'id',  
    Custom = 'custom',  
}
