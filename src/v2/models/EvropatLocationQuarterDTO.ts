import { EvropatQuarterDTO } from './EvropatQuarterDTO';

export interface EvropatLocationQuarterDTO {
  data: EvropatQuarterDTO;
  id: string;
  type: EvropatLocationQuarterDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum EvropatLocationQuarterDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
