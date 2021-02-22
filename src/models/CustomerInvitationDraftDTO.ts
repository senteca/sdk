import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface CustomerInvitationDraftDTO {
  version?: number;
  store?: KeyReferenceDTO;
  email: string;
  firstName?: string;
  lastName?: string;
  status?: CustomerInvitationDraftDTOStatusEnum;
  ttlMinutes?: number;
}

export enum CustomerInvitationDraftDTOStatusEnum {
    Pending = 'pending',  
    Accepted = 'accepted',  
    Expired = 'expired',  
}
