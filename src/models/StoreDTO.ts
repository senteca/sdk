import { KeyReferenceDTO } from './KeyReferenceDTO';
import { InterfaceDTO } from './InterfaceDTO';

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
  interfaces: InterfaceDTO[];
  id: string;
  createdAt: number;
  updatedAt: number;
}

