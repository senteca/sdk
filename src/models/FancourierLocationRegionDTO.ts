import { FancourierRegionDTO } from './FancourierRegionDTO';

export interface FancourierLocationRegionDTO {
  data: FancourierRegionDTO;
  id: string;
  type: FancourierLocationRegionDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum FancourierLocationRegionDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
