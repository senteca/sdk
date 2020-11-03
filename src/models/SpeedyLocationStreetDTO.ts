import { SpeedyStreetDTO } from './SpeedyStreetDTO';

export interface SpeedyLocationStreetDTO {
  data: SpeedyStreetDTO;
  id: string;
  type: SpeedyLocationStreetDTOTypeEnum;
  parent?: string;
  value: string;
}

export enum SpeedyLocationStreetDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
