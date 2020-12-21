import { OfferDTO } from './OfferDTO';
import { ProductAttributeDTO } from './ProductAttributeDTO';
import { ImageDTO } from './ImageDTO';
import { ShippingDataDTO } from './ShippingDataDTO';

export interface ProductVariantDTO {
  offer?: OfferDTO;
  offers: OfferDTO[];
  attributes: ProductAttributeDTO[];
  _id: string;
  sku: string;
  masterBarcode?: string;
  barcodes?: string[];
  aliasImagesFrom?: string;
  images?: ImageDTO[];
  shippingData?: ShippingDataDTO;
}

