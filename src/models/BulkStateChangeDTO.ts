import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface BulkStateChangeDTO {
  filter: string;
  toState: KeyReferenceDTO;
}

