import { KeyReferenceDTO } from './KeyReferenceDTO';
import { InterfaceDTO } from './InterfaceDTO';

export interface StoreDraftDTO {
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
}

