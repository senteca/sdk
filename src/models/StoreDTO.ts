import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface StoreDTO {
  version?: number;
  key: string;
  name?: string;
  description?: string;
  tags?: string[];
  languages: string[];
  merchants: KeyReferenceDTO[];
  priceLists: KeyReferenceDTO[];
  stockLocations: KeyReferenceDTO[];
  id: string;
  createdAt: number;
  updatedAt: number;
}

