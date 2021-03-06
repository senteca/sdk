import { LangValue } from './LangValue';
import { ProductDiscountValueDTO } from './ProductDiscountValueDTO';

export interface ProductDiscountDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  authority?: ProductDiscountDTOAuthorityEnum;
  merchantKey?: string;
  name: LangValue[];
  description?: LangValue[];
  value: ProductDiscountValueDTO;
  predicate: string;
  sortOrder: number;
  isActive?: boolean;
  validFrom?: number;
  validTo?: number;
}

export enum ProductDiscountDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
