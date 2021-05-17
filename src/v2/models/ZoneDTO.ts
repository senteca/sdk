import { LocationDTO } from './LocationDTO';

export interface ZoneDTO {
  version?: number;
  key: string;
  name: string;
  locations?: LocationDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

