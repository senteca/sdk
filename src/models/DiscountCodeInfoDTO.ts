import { IdReferenceDTO } from './IdReferenceDTO';
import { MoneyDTO } from './MoneyDTO';

export interface DiscountCodeInfoDTO {
  authority: DiscountCodeInfoDTOAuthorityEnum;
  discountCode: IdReferenceDTO;
  status: DiscountCodeInfoDTOStatusEnum;
  discountedAmount?: MoneyDTO;
}

export enum DiscountCodeInfoDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum DiscountCodeInfoDTOStatusEnum {
    NotActive = 'NotActive',  
    NotValid = 'NotValid',  
    DoesNotMatchCart = 'DoesNotMatchCart',  
    MatchesCart = 'MatchesCart',  
    MaxApplicationReached = 'MaxApplicationReached',  
    ApplicationStoppedByPreviousDiscount = 'ApplicationStoppedByPreviousDiscount',  
}
