import { KeyReferenceDTO } from './KeyReferenceDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { MoneyDTO } from './MoneyDTO';

export interface WalletDraftDTO {
  version?: number;
  type: KeyReferenceDTO;
  key: string;
  status: WalletDraftDTOStatusEnum;
  owners: IdReferenceDTO[];
  availableAmount?: MoneyDTO;
  lastKnownAvailableAmount?: MoneyDTO;
  lastSyncAt?: number;
  custom?: object;
}

export enum WalletDraftDTOStatusEnum {
    Requested = 'requested',  
    Inactive = 'inactive',  
    Active = 'active',  
    Locked = 'locked',  
    Cancelled = 'cancelled',  
    Lost = 'lost',  
    Stolen = 'stolen',  
    Suspended = 'suspended',  
}
