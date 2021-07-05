import { EvropatOfficeDTO } from './EvropatOfficeDTO';
import { EvropatCityDTO } from './EvropatCityDTO';

export interface EvropatModuleAddressDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  office: EvropatOfficeDTO;
  city: EvropatCityDTO;
  postCode: number;
  streetNumber: string;
  building: string;
  entrance: string;
  floor: string;
  apartment: string;
  additionalAddressInfo: string;
}

