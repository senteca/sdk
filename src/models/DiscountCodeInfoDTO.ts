import { IdReferenceDTO } from './IdReferenceDTO';

export interface DiscountCodeInfoDTO {
  authority: DiscountCodeInfoDTOAuthorityEnum;
  discountCode: IdReferenceDTO;
  status: DiscountCodeInfoDTOStatusEnum;
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
