import { SpeedyPriceDetailsValueDTO } from './SpeedyPriceDetailsValueDTO';

export interface SpeedyPriceDetailsDTO {
  additionalDiscount: SpeedyPriceDetailsValueDTO;
  addressDeliverySurcharge: SpeedyPriceDetailsValueDTO;
  addressPickupSurcharge: SpeedyPriceDetailsValueDTO;
  codPremium: SpeedyPriceDetailsValueDTO;
  dropOffDiscount: SpeedyPriceDetailsValueDTO;
  fixedDiscount: SpeedyPriceDetailsValueDTO;
  fuelSurcharge: SpeedyPriceDetailsValueDTO;
  heavyParcelSurcharge: SpeedyPriceDetailsValueDTO;
  insurancePremium: SpeedyPriceDetailsValueDTO;
  islandSurcharge: SpeedyPriceDetailsValueDTO;
  loadUnload: SpeedyPriceDetailsValueDTO;
  netAmount: SpeedyPriceDetailsValueDTO;
  nonStandardDeliveryDateSurcharge: SpeedyPriceDetailsValueDTO;
  optionsBeforePaymentSurcharge: SpeedyPriceDetailsValueDTO;
  pickUpDiscount: SpeedyPriceDetailsValueDTO;
  tollSurcharge: SpeedyPriceDetailsValueDTO;
  voucherDiscount: SpeedyPriceDetailsValueDTO;
}

