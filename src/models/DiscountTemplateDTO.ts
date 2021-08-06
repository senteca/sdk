import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { CustomField } from './CustomField';

export interface DiscountTemplateDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  storeKey?: string;
  authority?: DiscountTemplateDTOAuthorityEnum;
  merchantKey?: string;
  name: LangValue[];
  description?: LangValue[];
  customer?: IdReferenceDTO;
  cartDiscounts: IdReferenceDTO[];
  cartPredicate: string;
  tags?: string[];
  isActive?: boolean;
  isPublic?: boolean;
  periodDays?: number;
  maxApplications?: number;
  maxApplicationsPerCustomer?: number;
  custom?: CustomField[];
}

export enum DiscountTemplateDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
