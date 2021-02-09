import { MoneyDTO } from './MoneyDTO';
import { TaxedItemPriceDTO } from './TaxedItemPriceDTO';
import { LangValue } from './LangValue';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { TaxRateDTO } from './TaxRateDTO';
import { DiscountedLineItemPriceForQuantity } from './DiscountedLineItemPriceForQuantity';
import { ItemShippingDetailsDraftDTO } from './ItemShippingDetailsDraftDTO';
import { CustomField } from './CustomField';

export interface CustomLineItemDTO {
  _id: string;
  updatedAt: number;
  totalPrice?: MoneyDTO;
  taxedPrice?: TaxedItemPriceDTO;
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
}

