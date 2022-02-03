import { IdReferenceDTO } from './IdReferenceDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { MoneyDTO } from './MoneyDTO';
import { AddressDTO } from './AddressDTO';
import { PaymentTransactionDTO } from './PaymentTransactionDTO';

export interface PaymentDTO {
  _id: string;
  createdAt?: number;
  updatedAt?: number;
  status: PaymentDTOStatusEnum;
  method: IdReferenceDTO;
  type: PaymentDTOTypeEnum;
  authority?: PaymentDTOAuthorityEnum;
  merchant?: KeyReferenceDTO;
  moduleKey?: string;
  amount: MoneyDTO;
  billingAddress?: AddressDTO;
  transactions?: PaymentTransactionDTO[];
}

export enum PaymentDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Success = 'Success',  
    Failure = 'Failure',  
}
export enum PaymentDTOTypeEnum {
    PaymentServiceProvider = 'PaymentServiceProvider',  
    CashOnDelivery = 'CashOnDelivery',  
    Custom = 'Custom',  
}
export enum PaymentDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
