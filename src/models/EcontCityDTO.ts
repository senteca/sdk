import { EcontCountryDTO } from './EcontCountryDTO';
import { EcontGeoLocationDTO } from './EcontGeoLocationDTO';

export interface EcontCityDTO {
  id: number;
  country: EcontCountryDTO;
  postCode: string;
  name: string;
  nameEn: string;
  regionName: string;
  regionNameEn: string;
  phoneCode: string;
  location: EcontGeoLocationDTO;
  expressCityDeliveries: boolean;
}

