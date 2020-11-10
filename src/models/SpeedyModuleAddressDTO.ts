import { SpeedyOfficeDTO } from './SpeedyOfficeDTO';
import { SpeedyCityDTO } from './SpeedyCityDTO';
import { SpeedyQuarterDTO } from './SpeedyQuarterDTO';
import { SpeedyStreetDTO } from './SpeedyStreetDTO';

export interface SpeedyModuleAddressDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  office: SpeedyOfficeDTO;
  country: object;
  city: SpeedyCityDTO;
  postCode: number;
  quarter: SpeedyQuarterDTO;
  street: SpeedyStreetDTO;
  streetNumber: string;
  building: string;
  entrance: string;
  floor: string;
  apartment: string;
  additionalAddressInfo: string;
}

