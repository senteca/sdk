import { LocalizedString } from './LocalizedString';
import { CartDiscountValueDTO } from './CartDiscountValueDTO';
import { CartDiscountTargetDTO } from './CartDiscountTargetDTO';

export interface CartDiscountDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  authority: CartDiscountDTOAuthorityEnum;
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

export enum CartDiscountDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
