import { FancourierCityDTO } from './FancourierCityDTO';

export interface FancourierLocationCityDTO {
  data: FancourierCityDTO;
  id: string;
  type: FancourierLocationCityDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum FancourierLocationCityDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
