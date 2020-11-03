import { SpeedyCityDTO } from './SpeedyCityDTO';

export interface SpeedyLocationCityDTO {
  data: SpeedyCityDTO;
  id: string;
  type: SpeedyLocationCityDTOTypeEnum;
  parent?: string;
  value: string;
}

export enum SpeedyLocationCityDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
