import { LangValue } from './LangValue';
import { MoneyDTO } from './MoneyDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { TaxRateDTO } from './TaxRateDTO';
import { DiscountedLineItemPriceForQuantity } from './DiscountedLineItemPriceForQuantity';
import { ItemShippingDetailsDraftDTO } from './ItemShippingDetailsDraftDTO';
import { CustomField } from './CustomField';

export interface CustomLineItemDraftDTO {
  name: LangValue[];
  quantity: number;
  money: MoneyDTO;
  slug: string;
  taxCategory: KeyReferenceDTO;
  externalTaxRate?: TaxRateDTO;
  discountedPricePerQuantity?: DiscountedLineItemPriceForQuantity[];
  shippingDetails?: ItemShippingDetailsDraftDTO;
  fields?: any;
  custom?: CustomField[];
  type: string;
}

