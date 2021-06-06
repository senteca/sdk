import { SpeedyPriceDTO } from './SpeedyPriceDTO';
import { SpeedyAdditionalServiceDTO } from './SpeedyAdditionalServiceDTO';

export interface SpeedyCalculationDTO {
  serviceId: number;
  pickupDate: string;
  deliveryDeadline: string;
  deliveryDeadlineWorkDayType: string;
  price: SpeedyPriceDTO;
  additionalServices: SpeedyAdditionalServiceDTO[];
}

