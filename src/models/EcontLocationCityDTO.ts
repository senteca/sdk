import { EcontCityDTO } from './EcontCityDTO';

export interface EcontLocationCityDTO {
  data: EcontCityDTO;
  id: string;
  type: EcontLocationCityDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum EcontLocationCityDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
