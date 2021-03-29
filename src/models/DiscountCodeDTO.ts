import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { CustomField } from './CustomField';

export interface DiscountCodeDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  totalApplications: number;
  applicationsPerCustomer: any;
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
  custom?: CustomField[];
}

export enum DiscountCodeDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
