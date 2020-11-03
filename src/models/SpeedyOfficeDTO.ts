import { SpeedyOfficeAddressDTO } from './SpeedyOfficeAddressDTO';
import { SpeedyOfficeMaxParcelDimensionsDTO } from './SpeedyOfficeMaxParcelDimensionsDTO';
import { SpeedyOfficeWorkingTimeScheduleDTO } from './SpeedyOfficeWorkingTimeScheduleDTO';

export interface SpeedyOfficeDTO {
  id: number;
  name: string;
  nameEn: string;
  siteId: number;
  address: SpeedyOfficeAddressDTO;
  workingTimeFrom: string;
  workingTimeTo: string;
  workingTimeHalfFrom: string;
  workingTimeHalfTo: string;
  workingTimeDayOffFrom: string;
  workingTimeDayOffTo: string;
  maxParcelDimensions: SpeedyOfficeMaxParcelDimensionsDTO;
  maxParcelWeight: number;
  type: string;
  nearbyOfficeId: number;
  workingTimeSchedule: SpeedyOfficeWorkingTimeScheduleDTO[];
  validFrom: string;
  validTo: string;
  cargoTypesAllowed: string[];
  pickUpAllowed: boolean;
  dropOffAllowed: boolean;
  palletOffice: boolean;
  cashPaymentAllowed: boolean;
  cardPaymentAllowed: boolean;
}

