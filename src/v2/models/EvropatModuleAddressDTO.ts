import { EvropatOfficeDTO } from './EvropatOfficeDTO';
import { EvropatCityDTO } from './EvropatCityDTO';
import { EvropatQuarterDTO } from './EvropatQuarterDTO';
import { EvropatStreetDTO } from './EvropatStreetDTO';

export interface EvropatModuleAddressDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  office: EvropatOfficeDTO;
  country: any;
  city: EvropatCityDTO;
  postCode: number;
  quarter: EvropatQuarterDTO;
  street: EvropatStreetDTO;
  streetNumber: string;
  building: string;
  entrance: string;
  floor: string;
  apartment: string;
  additionalAddressInfo: string;
}

