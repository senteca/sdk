import { EcontOfficeAddressDTO } from './EcontOfficeAddressDTO';

export interface EcontOfficeDTO {
  id: number;
  code: string;
  isMPS: boolean;
  isAPS: boolean;
  name: string;
  nameEn: string;
  phones: string[];
  emails: string[];
  address: EcontOfficeAddressDTO;
  info: string;
  currency: string;
  language: string;
  normalBusinessHoursFrom: number;
  normalBusinessHoursTo: number;
  halfDayBusinessHoursFrom: number;
  halfDayBusinessHoursTo: number;
  shipmentTypes: string[];
  partnerCode: string;
  hubCode: string;
  hubName: string;
}

