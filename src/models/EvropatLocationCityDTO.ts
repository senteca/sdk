import { EvropatCityDTO } from './EvropatCityDTO';

export interface EvropatLocationCityDTO {
  data: EvropatCityDTO;
  id: string;
  type: EvropatLocationCityDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum EvropatLocationCityDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
