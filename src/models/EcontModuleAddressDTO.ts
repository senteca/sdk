import { EcontOfficeDTO } from './EcontOfficeDTO';
import { EcontCityDTO } from './EcontCityDTO';
import { EcontQuarterDTO } from './EcontQuarterDTO';
import { EcontStreetDTO } from './EcontStreetDTO';

export interface EcontModuleAddressDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  office: EcontOfficeDTO;
  country: any;
  city: EcontCityDTO;
  postCode: number;
  quarter: EcontQuarterDTO;
  street: EcontStreetDTO;
  streetNumber: string;
  building: string;
  entrance: string;
  floor: string;
  apartment: string;
  additionalAddressInfo: string;
}

