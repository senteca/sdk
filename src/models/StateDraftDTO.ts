import { LangValue } from './LangValue';
import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface StateDraftDTO {
  version?: number;
  key: string;
  type: StateDraftDTOTypeEnum;
  name?: LangValue[];
  description?: LangValue[];
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
