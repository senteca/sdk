import { MoneyDTO } from './MoneyDTO';

export interface OfferDTO {
  isBest: boolean;
  priceListKey: string;
  merchantKey: string;
  price: MoneyDTO;
  discountedPrice?: MoneyDTO;
  unit: OfferDTOUnitEnum;
  quantity: number;
  minQuantity: number;
  maxQuantity: number;
  step: number;
  sellUnit: OfferDTOSellUnitEnum;
  conversionRate: number;
}

export enum OfferDTOUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
export enum OfferDTOSellUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
