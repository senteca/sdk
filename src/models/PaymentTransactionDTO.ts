import { MoneyDTO } from './MoneyDTO';

export interface PaymentTransactionDTO {
  createdAt: number;
  updatedAt: number;
  id: string;
  _id?: any;
  status?: PaymentTransactionDTOStatusEnum;
  type: PaymentTransactionDTOTypeEnum;
  amount: MoneyDTO;
  transactionNumber: string;
  providerPayload?: any;
}

export enum PaymentTransactionDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Success = 'Success',  
    Failure = 'Failure',  
}
export enum PaymentTransactionDTOTypeEnum {
    Authorization = 'Authorization',  
    CancelAuthorization = 'CancelAuthorization',  
    Charge = 'Charge',  
    Refund = 'Refund',  
    ChargeBack = 'ChargeBack',  
}
