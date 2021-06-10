import { EvropatCountryDTO } from './EvropatCountryDTO';

export interface EvropatLocationCountryDTO {
  data: EvropatCountryDTO;
  id: string;
  type: EvropatLocationCountryDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum EvropatLocationCountryDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
