import { EvropatOfficeAddressDTO } from './EvropatOfficeAddressDTO';

export interface EvropatOfficeDTO {
  id: number;
  name: string;
  nameEn: string;
  siteId: number;
  address: EvropatOfficeAddressDTO;
  workingTimeFrom: string;
  workingTimeTo: string;
  workingTimeHalfFrom: string;
  workingTimeHalfTo: string;
  workingTimeDayOffFrom: string;
  workingTimeDayOffTo: string;
  maxParcelWeight: number;
  type: string;
  nearbyOfficeId: number;
  validFrom: string;
  validTo: string;
  cargoTypesAllowed: string[];
  pickUpAllowed: boolean;
  dropOffAllowed: boolean;
  palletOffice: boolean;
  cashPaymentAllowed: boolean;
  cardPaymentAllowed: boolean;
}

