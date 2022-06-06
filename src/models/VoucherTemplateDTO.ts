import { LangValue } from './LangValue';
import { MoneyDTO } from './MoneyDTO';
import { CustomField } from './CustomField';

export interface VoucherTemplateDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  key: string;
  name: LangValue[];
  value: MoneyDTO;
  periodDays?: number;
  cartPredicate: string;
  lineItemPredicate: string;
  errorMessage?: LangValue[];
  isActive?: boolean;
  productId: string;
  custom?: CustomField[];
}

