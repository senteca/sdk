import { SpeedyClientAddressDTO } from './SpeedyClientAddressDTO';
import { SpeedyPhoneDTO } from './SpeedyPhoneDTO';

export interface SpeedyClientDetailsDTO {
  address: SpeedyClientAddressDTO;
  clientId: number;
  clientName: string;
  contactName: string;
  email: string;
  objectName: string;
  additionalServices: SpeedyPhoneDTO[];
  privatePerson: boolean;
}

