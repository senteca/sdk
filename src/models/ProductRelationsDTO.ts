import { IdReferenceDTO } from './IdReferenceDTO';

export interface ProductRelationsDTO {
  related?: IdReferenceDTO[];
  crosssell?: IdReferenceDTO[];
  upsell?: IdReferenceDTO[];
}

