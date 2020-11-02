import { LangValue } from './LangValue';
import { CartDiscountValueDTO } from './CartDiscountValueDTO';
import { CartDiscountTargetDTO } from './CartDiscountTargetDTO';

export interface CartDiscountDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  authority?: CartDiscountDTOAuthorityEnum;
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
  stackingMode: CartDiscountDTOStackingModeEnum;
}

export enum CartDiscountDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum CartDiscountDTOStackingModeEnum {
    Stacking = 'stacking',  
    StopAfterThisDiscount = 'stopAfterThisDiscount',  
}
