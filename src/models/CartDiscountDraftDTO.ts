import { LangValue } from './LangValue';
import { CartDiscountValueDTO } from './CartDiscountValueDTO';
import { CartDiscountTargetDTO } from './CartDiscountTargetDTO';

export interface CartDiscountDraftDTO {
  authority?: CartDiscountDraftDTOAuthorityEnum;
  merchantKey?: string;
  name: LangValue[];
  description?: LangValue[];
  value: CartDiscountValueDTO;
  cartPredicate: string;
  target?: CartDiscountTargetDTO;
  sortOrder: number;
  isActive: boolean;
  validFrom?: number;
  validTo?: number;
  requiresDiscountCode?: boolean;
  stackingMode: CartDiscountDraftDTOStackingModeEnum;
}

export enum CartDiscountDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum CartDiscountDraftDTOStackingModeEnum {
    Stacking = 'stacking',  
    StopAfterThisDiscount = 'stopAfterThisDiscount',  
}
