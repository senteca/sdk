import { KeyReferenceDTO } from './KeyReferenceDTO';
import { LangValue } from './LangValue';
import { MoneyDTO } from './MoneyDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { CustomField } from './CustomField';

export interface VoucherBulkCreateDTO {
  voucherCodeLength: number;
  voucherCodePrefix?: string;
  voucherCodeSeparator?: string;
  codesCount: number;
  version?: number;
  template?: KeyReferenceDTO;
  name: LangValue[];
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

