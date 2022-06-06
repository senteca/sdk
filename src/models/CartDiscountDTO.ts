import { LangValue } from './LangValue';
import { CartDiscountValueDTO } from './CartDiscountValueDTO';
import { MoneyDTO } from './MoneyDTO';
import { CartDiscountTargetDTO } from './CartDiscountTargetDTO';
import { CustomField } from './CustomField';

export interface CartDiscountDTO {
  version?: number;
  authority?: CartDiscountDTOAuthorityEnum;
  merchantKey?: string;
  name: LangValue[];
  description?: LangValue[];
  value: CartDiscountValueDTO;
  maxDiscountValue?: MoneyDTO;
  cartPredicate?: string;
  target?: CartDiscountTargetDTO;
  sortOrder: number;
  isActive: boolean;
  validFrom?: number;
  validTo?: number;
  requiresDiscountCode?: boolean;
  evadeUniqueFilter?: boolean;
  stackingMode: CartDiscountDTOStackingModeEnum;
  custom?: CustomField[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export enum CartDiscountDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum CartDiscountDTOStackingModeEnum {
    Stacking = 'stacking',  
    StopAfterThisDiscount = 'stopAfterThisDiscount',  
}
