import { LangValue } from './LangValue';
import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface StateDTO {
  version?: number;
  key: string;
  type: StateDTOTypeEnum;
  name?: LangValue[];
  description?: LangValue[];
  color?: string;
  initial: boolean;
  transitions: KeyReferenceDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
  system: boolean;
}

export enum StateDTOTypeEnum {
    OrderState = 'OrderState',  
    LineItemState = 'LineItemState',  
    PaymentState = 'PaymentState',  
    WalletState = 'WalletState',  
    ProductState = 'ProductState',  
}
