import { LocalizedString } from './LocalizedString';
import { CartDiscountValueDTO } from './CartDiscountValueDTO';
import { CartDiscountTargetDTO } from './CartDiscountTargetDTO';

export interface CartDiscountDraftDTO {
  authority: CartDiscountDraftDTOAuthorityEnum;
  merchantKey?: string;
  name: LocalizedString;
  description?: LocalizedString;
  value: CartDiscountValueDTO;
  cartPredicate: string;
  target?: CartDiscountTargetDTO;
  sortOrder: number;
  isActive: boolean;
  validFrom?: number;
  validTo?: number;
  requiresDiscountCode: boolean;
  stackingMode: string;
}

export enum CartDiscountDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
