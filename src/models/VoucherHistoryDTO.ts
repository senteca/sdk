import { IdReferenceDTO } from './IdReferenceDTO';
import { MoneyDTO } from './MoneyDTO';

export interface VoucherHistoryDTO {
  _id: string;
  createdAt: number;
  voucher: IdReferenceDTO;
  order: IdReferenceDTO;
  customer: IdReferenceDTO;
  amount: MoneyDTO;
  type: VoucherHistoryDTOTypeEnum;
}

export enum VoucherHistoryDTOTypeEnum {
    Refund = 'Refund',  
    Withdraw = 'Withdraw',  
}
