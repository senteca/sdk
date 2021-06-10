import { EvropatStreetDTO } from './EvropatStreetDTO';

export interface EvropatLocationStreetDTO {
  data: EvropatStreetDTO;
  id: string;
  type: EvropatLocationStreetDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum EvropatLocationStreetDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
