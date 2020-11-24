import { MoneyDTO } from './MoneyDTO';

export interface PaymentTransactionDraftDTO {
  _id?: any;
  status?: PaymentTransactionDraftDTOStatusEnum;
  type: PaymentTransactionDraftDTOTypeEnum;
  amount: MoneyDTO;
  transactionNumber: string;
  providerPayload?: any;
}

export enum PaymentTransactionDraftDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Success = 'Success',  
    Failure = 'Failure',  
}
export enum PaymentTransactionDraftDTOTypeEnum {
    Authorization = 'Authorization',  
    CancelAuthorization = 'CancelAuthorization',  
    Charge = 'Charge',  
    Refund = 'Refund',  
    ChargeBack = 'ChargeBack',  
}
