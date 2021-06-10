import { EcontOfficeDTO } from './EcontOfficeDTO';

export interface EcontLocationOfficeDTO {
  data: EcontOfficeDTO;
  id: string;
  type: EcontLocationOfficeDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum EcontLocationOfficeDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
