import { LangValue } from './LangValue';
import { CartDiscountValueDTO } from './CartDiscountValueDTO';
import { MoneyDTO } from './MoneyDTO';
import { CartDiscountTargetDTO } from './CartDiscountTargetDTO';
import { CustomField } from './CustomField';

export interface CartDiscountDraftDTO {
  version?: number;
  authority?: CartDiscountDraftDTOAuthorityEnum;
  merchantKey?: string;
  name: LangValue[];
  description?: LangValue[];
  value: CartDiscountValueDTO;
  maxDiscountValue?: MoneyDTO;
  cartPredicate: string;
  target?: CartDiscountTargetDTO;
  sortOrder: number;
  isActive: boolean;
  validFrom?: number;
  validTo?: number;
  requiresDiscountCode?: boolean;
  evadeUniqueFilter?: boolean;
  stackingMode: CartDiscountDraftDTOStackingModeEnum;
  custom?: CustomField[];
}

export enum CartDiscountDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum CartDiscountDraftDTOStackingModeEnum {
    Stacking = 'stacking',  
    StopAfterThisDiscount = 'stopAfterThisDiscount',  
}
