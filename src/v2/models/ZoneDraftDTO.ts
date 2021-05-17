import { LocationDTO } from './LocationDTO';

export interface ZoneDraftDTO {
  version?: number;
  key: string;
  name: string;
  locations?: LocationDTO[];
}

