import { KeyReferenceDTO } from './KeyReferenceDTO';
import { LangValue } from './LangValue';
import { MoneyDTO } from './MoneyDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { CustomField } from './CustomField';

export interface VoucherDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  template?: KeyReferenceDTO;
  name: LangValue[];
  code: string;
  value: MoneyDTO;
  customers?: IdReferenceDTO[];
  validFrom?: number;
  validTo?: number;
  cartPredicate: string;
  lineItemPredicate: string;
  errorMessage?: LangValue[];
  custom?: CustomField[];
  isActive?: boolean;
  productId: string;
}

