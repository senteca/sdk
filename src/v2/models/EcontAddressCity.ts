import { EcontAddressCountry } from './EcontAddressCountry';

export interface EcontAddressCity {
  country: EcontAddressCountry;
  name: string;
  postCode: string;
}

