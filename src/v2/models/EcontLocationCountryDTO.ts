import { EcontCountryDTO } from './EcontCountryDTO';

export interface EcontLocationCountryDTO {
  data: EcontCountryDTO;
  id: string;
  type: EcontLocationCountryDTOTypeEnum;
  parent?: string;
  value: string;
  valueEn: string;
}

export enum EcontLocationCountryDTOTypeEnum {
    Country = 'Country',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
