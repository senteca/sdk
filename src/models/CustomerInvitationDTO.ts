import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface CustomerInvitationDTO {
  version?: number;
  store?: KeyReferenceDTO;
  email: string;
  firstName?: string;
  lastName?: string;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

