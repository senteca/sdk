import { SpeedyQuarterDTO } from './SpeedyQuarterDTO';

export interface SpeedyLocationQuarterDTO {
  data: SpeedyQuarterDTO;
  id: string;
  type: SpeedyLocationQuarterDTOTypeEnum;
  parent?: string;
  value: string;
}

export enum SpeedyLocationQuarterDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
