import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';

export interface DiscountCodeDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  authority?: DiscountCodeDTOAuthorityEnum;
  merchantKey?: string;
  name: LangValue[];
  description?: LangValue[];
  code: string;
  cartDiscounts: IdReferenceDTO[];
  cartPredicate: string;
  groups?: string[];
  isActive?: boolean;
  validFrom?: number;
  validTo?: number;
  maxApplications?: number;
  maxApplicationsPerCustomer?: number;
}

export enum DiscountCodeDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
