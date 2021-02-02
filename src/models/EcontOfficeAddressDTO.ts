import { EcontCityDTO } from './EcontCityDTO';
import { EcontGeoLocationDTO } from './EcontGeoLocationDTO';

export interface EcontOfficeAddressDTO {
  id: number;
  city: EcontCityDTO;
  fullAddress: string;
  quarter: string;
  street: string;
  num: string;
  other?: string;
  location: EcontGeoLocationDTO;
  zip?: string;
}

