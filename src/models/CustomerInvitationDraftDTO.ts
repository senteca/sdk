import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface CustomerInvitationDraftDTO {
  version?: number;
  store?: KeyReferenceDTO;
  email: string;
  firstName?: string;
  lastName?: string;
}

