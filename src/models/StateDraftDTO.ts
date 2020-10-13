import { LocalizedString } from './LocalizedString';
import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface StateDraftDTO {
  version?: number;
  key: string;
  type: StateDraftDTOTypeEnum;
  name?: LocalizedString;
  description?: LocalizedString;
  color?: string;
  initial: boolean;
  transitions: KeyReferenceDTO[];
}

export enum StateDraftDTOTypeEnum {
    OrderState = 'OrderState',  
    LineItemState = 'LineItemState',  
    PaymentState = 'PaymentState',  
    WalletState = 'WalletState',  
}
