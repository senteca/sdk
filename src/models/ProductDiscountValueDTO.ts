import { MoneyDTO } from './MoneyDTO';

export interface ProductDiscountValueDTO {
  type: ProductDiscountValueDTOTypeEnum;
  permyriad: number;
  money: MoneyDTO[];
}

export enum ProductDiscountValueDTOTypeEnum {
    Relative = 'relative',  
    Absolute = 'absolute',  
}
