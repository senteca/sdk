import { SpeedyCityDTO } from './SpeedyCityDTO';

export interface SpeedyLocationCityDTO {
  data: SpeedyCityDTO;
  id: string;
  type: SpeedyLocationCityDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum SpeedyLocationCityDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
