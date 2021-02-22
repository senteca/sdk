import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface CustomerInvitationDTO {
  version?: number;
  store?: KeyReferenceDTO;
  email: string;
  firstName?: string;
  lastName?: string;
  status?: CustomerInvitationDTOStatusEnum;
  ttlMinutes?: number;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export enum CustomerInvitationDTOStatusEnum {
    Pending = 'pending',  
    Accepted = 'accepted',  
    Expired = 'expired',  
}
