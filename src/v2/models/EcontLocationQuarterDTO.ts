import { EcontQuarterDTO } from './EcontQuarterDTO';

export interface EcontLocationQuarterDTO {
  data: EcontQuarterDTO;
  id: string;
  type: EcontLocationQuarterDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum EcontLocationQuarterDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
