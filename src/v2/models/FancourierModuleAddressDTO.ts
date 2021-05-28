import { FancourierCityDTO } from './FancourierCityDTO';
import { FancourierStreetDTO } from './FancourierStreetDTO';

export interface FancourierModuleAddressDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: FancourierCityDTO;
  postCode: number;
  street: FancourierStreetDTO;
  streetNumber: string;
  building: string;
  entrance: string;
  floor: string;
  apartment: string;
  additionalAddressInfo: string;
}

