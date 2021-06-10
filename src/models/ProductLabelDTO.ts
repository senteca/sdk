import { IdReferenceDTO } from './IdReferenceDTO';

export interface ProductLabelDTO {
  label: IdReferenceDTO;
  validFrom?: number;
  validTo?: number;
}

