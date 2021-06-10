import { SpeedyOfficeDTO } from './SpeedyOfficeDTO';

export interface SpeedyLocationOfficeDTO {
  data: SpeedyOfficeDTO;
  id: string;
  type: SpeedyLocationOfficeDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum SpeedyLocationOfficeDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
