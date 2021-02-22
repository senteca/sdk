import { EcontAddressCity } from './EcontAddressCity';

export interface EcontSenderAddress {
  city: EcontAddressCity;
  quarter?: string;
  street?: string;
  num?: string;
  other?: string;
}

