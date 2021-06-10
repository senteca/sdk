import { SpeedyCountryDTO } from './SpeedyCountryDTO';

export interface SpeedyLocationCountryDTO {
  data: SpeedyCountryDTO;
  id: string;
  type: SpeedyLocationCountryDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum SpeedyLocationCountryDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
