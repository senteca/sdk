import { MoneyDTO } from './MoneyDTO';

export interface OfferDraftDTO {
  priceListKey: string;
  merchantKey: string;
  price: MoneyDTO;
  discountedPrice?: MoneyDTO;
  unit: OfferDraftDTOUnitEnum;
  quantity: number;
  minQuantity: number;
  maxQuantity: number;
  step: number;
  sellUnit: OfferDraftDTOSellUnitEnum;
  conversionRate: number;
}

export enum OfferDraftDTOUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
export enum OfferDraftDTOSellUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
