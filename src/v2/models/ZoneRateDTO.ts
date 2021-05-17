import { KeyReferenceDTO } from './KeyReferenceDTO';
import { ShippingRate } from './ShippingRate';

export interface ZoneRateDTO {
  zone: KeyReferenceDTO;
  rates: ShippingRate[];
}

