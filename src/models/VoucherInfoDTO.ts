import { IdReferenceDTO } from './IdReferenceDTO';
import { MoneyDTO } from './MoneyDTO';

export interface VoucherInfoDTO {
  voucher?: IdReferenceDTO;
  status: VoucherInfoDTOStatusEnum;
  errorMessage?: string;
  discount?: MoneyDTO;
  matchingLineItemIds?: string[];
}

export enum VoucherInfoDTOStatusEnum {
    Pending = 'Pending',  
    Valid = 'Valid',  
    NotValid = 'NotValid',  
    NotActive = 'NotActive',  
    Expired = 'Expired',  
    DoesNotMatchCart = 'DoesNotMatchCart',  
    NoMatchingLineItems = 'NoMatchingLineItems',  
    MaxApplicationReached = 'MaxApplicationReached',  
    ZeroBalance = 'ZeroBalance',  
    Refunded = 'Refunded',  
}
