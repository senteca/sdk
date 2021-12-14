import { MoneyDTO } from './MoneyDTO';
import { IdReferenceDTO } from './IdReferenceDTO';

export interface CartDiscountValueDTO {
  type: CartDiscountValueDTOTypeEnum;
  permyriad?: number;
  money?: MoneyDTO[];
  product?: IdReferenceDTO;
  variantId?: string;
  quantity?: number;
}

export enum CartDiscountValueDTOTypeEnum {
    Relative = 'relative',  
    Absolute = 'absolute',  
    GiftLineItem = 'giftLineItem',  
    SelectableGiftLineItem = 'selectableGiftLineItem',  
}
