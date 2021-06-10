import { EvropatOfficeDTO } from './EvropatOfficeDTO';

export interface EvropatLocationOfficeDTO {
  data: EvropatOfficeDTO;
  id: string;
  type: EvropatLocationOfficeDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum EvropatLocationOfficeDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
