import { EcontStreetDTO } from './EcontStreetDTO';

export interface EcontLocationStreetDTO {
  data: EcontStreetDTO;
  id: string;
  type: EcontLocationStreetDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum EcontLocationStreetDTOTypeEnum {
    Country = 'Country',  
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
