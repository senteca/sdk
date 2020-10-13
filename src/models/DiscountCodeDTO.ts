import { LocalizedString } from './LocalizedString';
import { IdReferenceDTO } from './IdReferenceDTO';

export interface DiscountCodeDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  authority: DiscountCodeDTOAuthorityEnum;
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

export enum DiscountCodeDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
