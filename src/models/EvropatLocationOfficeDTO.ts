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
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
