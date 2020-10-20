import { KeyReferenceDTO } from './KeyReferenceDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { MoneyDTO } from './MoneyDTO';
import { CustomField } from './CustomField';

export interface WalletDTO {
  id: string;
  version?: number;
  type: KeyReferenceDTO;
  key: string;
  status: WalletDTOStatusEnum;
  owners: IdReferenceDTO[];
  availableAmount?: MoneyDTO;
  lastKnownAvailableAmount?: MoneyDTO;
  lastSyncAt?: number;
  custom?: CustomField[];
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
