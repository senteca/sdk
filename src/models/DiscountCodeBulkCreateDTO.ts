import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { CustomField } from './CustomField';

export interface DiscountCodeBulkCreateDTO {
  version?: number;
  storeKey?: string;
  authority?: DiscountCodeBulkCreateDTOAuthorityEnum;
  merchantKey?: string;
  name: LangValue[];
  description?: LangValue[];
  code: string;
  customer?: IdReferenceDTO;
  cartDiscounts: IdReferenceDTO[];
  cartPredicate?: string;
  groups?: string[];
  isActive?: boolean;
  isPublic?: boolean;
  tags?: string[];
  validFrom?: number;
  validTo?: number;
  maxApplications?: number;
  maxApplicationsPerCustomer?: number;
  custom?: CustomField[];
  discountCodeLength: number;
  discountCodePrefix?: string;
  discountCodeSeparator?: string;
  codesCount: number;
}

export enum DiscountCodeBulkCreateDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
