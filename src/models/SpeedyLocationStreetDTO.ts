import { SpeedyStreetDTO } from './SpeedyStreetDTO';

export interface SpeedyLocationStreetDTO {
  data: SpeedyStreetDTO;
  id: string;
  type: SpeedyLocationStreetDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum SpeedyLocationStreetDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
