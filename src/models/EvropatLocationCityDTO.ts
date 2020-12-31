import { EvropatCityDTO } from './EvropatCityDTO';

export interface EvropatLocationCityDTO {
  data: EvropatCityDTO;
  id: string;
  type: EvropatLocationCityDTOTypeEnum;
  parent?: string;
  value: string;
}

export enum EvropatLocationCityDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
