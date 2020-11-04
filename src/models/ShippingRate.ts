import { MoneyDTO } from './MoneyDTO';
import { ShippingRateWeightTable } from './ShippingRateWeightTable';

export interface ShippingRate {
  type: ShippingRateTypeEnum;
  rank: number;
  fixedValue?: MoneyDTO;
  tableValue?: ShippingRateWeightTable[];
  formulaValue?: string;
}

export enum ShippingRateTypeEnum {
    Fixed = 'Fixed',  
    WeightTable = 'WeightTable',  
    Formula = 'Formula',  
}
