import { EcontAddressCity } from './EcontAddressCity';

export interface EcontAddress {
  city: EcontAddressCity;
  quarter?: string;
  street?: string;
  num?: string;
  other?: string;
}

