import { LocalizedString } from './LocalizedString';
import { ProductDiscountValueDTO } from './ProductDiscountValueDTO';

export interface ProductDiscountDraftDTO {
  authority: ProductDiscountDraftDTOAuthorityEnum;
  merchantKey?: string;
  name: LocalizedString;
  description?: LocalizedString;
  value: ProductDiscountValueDTO;
  predicate: string;
  sortOrder: number;
  isActive: boolean;
  validFrom?: number;
  validTo?: number;
}

export enum ProductDiscountDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
