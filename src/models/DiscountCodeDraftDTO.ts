import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';

export interface DiscountCodeDraftDTO {
  version?: number;
  authority?: DiscountCodeDraftDTOAuthorityEnum;
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

export enum DiscountCodeDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
