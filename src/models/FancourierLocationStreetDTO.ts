import { FancourierStreetDTO } from './FancourierStreetDTO';

export interface FancourierLocationStreetDTO {
  data: FancourierStreetDTO;
  id: string;
  type: FancourierLocationStreetDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum FancourierLocationStreetDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
