import { KeyReferenceDTO } from './KeyReferenceDTO';

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
}

