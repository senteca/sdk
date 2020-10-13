import { LocalizedString } from './LocalizedString';
import { IdReferenceDTO } from './IdReferenceDTO';

export interface DiscountCodeDraftDTO {
  authority: DiscountCodeDraftDTOAuthorityEnum;
  merchantKey?: string;
  name: LocalizedString;
  description?: LocalizedString;
  code: string;
  cartDiscounts: IdReferenceDTO[];
  cartPredicate: string;
  groups: string[];
  isActive: boolean;
  validFrom?: number;
  validTo?: number;
  maxApplications?: number;
  maxApplicationsPerCustomer?: number;
  totalApplications: number;
  applicationsPerCustomer: object;
}

export enum DiscountCodeDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
