import { ProductAttributeDraftDTO } from './ProductAttributeDraftDTO';
import { OfferDraftDTO } from './OfferDraftDTO';
import { ImageDTO } from './ImageDTO';
import { ShippingDataDTO } from './ShippingDataDTO';
import { OptionDefinitionDTO } from './OptionDefinitionDTO';
import { InventoryDraftDTO } from './InventoryDraftDTO';
import { LangValue } from './LangValue';
import { ContentDTO } from './ContentDTO';
import { ProductVariantLabelDTO } from './ProductVariantLabelDTO';
import { CustomField } from './CustomField';

export interface ProductVariantUpdateDTO {
  masterBarcode?: string;
  barcodes?: string[];
  collapseKey?: string;
  collapseMode?: ProductVariantUpdateDTOCollapseModeEnum;
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
  labels?: ProductVariantLabelDTO[];
  custom?: CustomField[];
}

export enum ProductVariantUpdateDTOCollapseModeEnum {
    None = 'none',  
    Id = 'id',  
    Custom = 'custom',  
}
