import { LocalizedString } from './LocalizedString';
import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface StateDTO {
  version?: number;
  key: string;
  type: StateDTOTypeEnum;
  name?: LocalizedString;
  description?: LocalizedString;
  color?: string;
  initial: boolean;
  transitions: KeyReferenceDTO[];
  id: string;
  createdAt: number;
  updatedAt: number;
  system: boolean;
}

export enum StateDTOTypeEnum {
    OrderState = 'OrderState',  
    LineItemState = 'LineItemState',  
    PaymentState = 'PaymentState',  
    WalletState = 'WalletState',  
}
