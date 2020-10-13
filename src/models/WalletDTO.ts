import { IdReferenceDTO } from './IdReferenceDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { MoneyDTO } from './MoneyDTO';

export interface WalletDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  owners: IdReferenceDTO[];
  version?: number;
  type: KeyReferenceDTO;
  key: string;
  status: WalletDTOStatusEnum;
  availableAmount?: MoneyDTO;
  lastKnownAvailableAmount?: MoneyDTO;
  lastSyncAt?: number;
  custom?: object;
}

export enum WalletDTOStatusEnum {
    Requested = 'requested',  
    Inactive = 'inactive',  
    Active = 'active',  
    Locked = 'locked',  
    Cancelled = 'cancelled',  
    Lost = 'lost',  
    Stolen = 'stolen',  
    Suspended = 'suspended',  
}
