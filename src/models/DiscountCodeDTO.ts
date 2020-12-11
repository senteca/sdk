import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';

export interface DiscountCodeDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  authority?: DiscountCodeDTOAuthorityEnum;
  merchantKey?: string;
  name: LangValue[];
  description?: LangValue[];
  code: string;
  customer?: IdReferenceDTO;
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
