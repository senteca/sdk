import { LangValue } from './LangValue';
import { MoneyDTO } from './MoneyDTO';
import { OfferTierDTO } from './OfferTierDTO';
import { OfferDiscountDTO } from './OfferDiscountDTO';

export interface ProductOfferSetOfferDTO {
  _id?: string;
  priceListKey?: string;
  merchantKey: string;
  validFrom?: number;
  validTo?: number;
  status: ProductOfferSetOfferDTOStatusEnum;
  statusMessage?: LangValue[];
  originalPrice: MoneyDTO;
  tiers: OfferTierDTO[];
  tier?: OfferTierDTO;
  externalDiscount?: OfferDiscountDTO;
  unit?: ProductOfferSetOfferDTOUnitEnum;
  quantity?: number;
  minQuantity?: number;
  maxQuantity?: number;
  step?: number;
  sellUnit: ProductOfferSetOfferDTOSellUnitEnum;
  conversionRate?: number;
  externallyChanged?: boolean;
}

export enum ProductOfferSetOfferDTOStatusEnum {
    Active = 'active',  
    Inactive = 'inactive',  
    Fictive = 'fictive',  
}
export enum ProductOfferSetOfferDTOUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
export enum ProductOfferSetOfferDTOSellUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
