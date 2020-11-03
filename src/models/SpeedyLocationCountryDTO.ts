import { SpeedyCountryDTO } from './SpeedyCountryDTO';

export interface SpeedyLocationCountryDTO {
  data: SpeedyCountryDTO;
  id: string;
  type: SpeedyLocationCountryDTOTypeEnum;
  parent?: string;
  value: string;
}

export enum SpeedyLocationCountryDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
