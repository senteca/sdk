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
    Region = 'Region',  
    City = 'City',  
    Quarter = 'Quarter',  
    Street = 'Street',  
    Office = 'Office',  
}
