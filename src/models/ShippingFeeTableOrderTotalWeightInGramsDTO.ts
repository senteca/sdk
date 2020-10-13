import { MoneyDTO } from './MoneyDTO';

export interface ShippingFeeTableOrderTotalWeightInGramsDTO {
  weightLessThan: number;
  fee: MoneyDTO;
}

