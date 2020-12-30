import { EcontCityDTO } from './EcontCityDTO';

export interface EcontLocationCityDTO {
  data: EcontCityDTO;
  id: string;
  type: EcontLocationCityDTOTypeEnum;
  parent?: string;
  value: string;
}

export enum EcontLocationCityDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
