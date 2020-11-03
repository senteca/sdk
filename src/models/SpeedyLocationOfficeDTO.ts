import { SpeedyOfficeDTO } from './SpeedyOfficeDTO';

export interface SpeedyLocationOfficeDTO {
  data: SpeedyOfficeDTO;
  id: string;
  type: SpeedyLocationOfficeDTOTypeEnum;
  parent?: string;
  value: string;
}

export enum SpeedyLocationOfficeDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
