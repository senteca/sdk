import { SpeedyQuarterDTO } from './SpeedyQuarterDTO';

export interface SpeedyLocationQuarterDTO {
  data: SpeedyQuarterDTO;
  id: string;
  type: SpeedyLocationQuarterDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum SpeedyLocationQuarterDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
