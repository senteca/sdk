import { IdReferenceDTO } from './IdReferenceDTO';

export interface ShippingMethodUpdateDTO {
  authority: ShippingMethodUpdateDTOAuthorityEnum;
  method: IdReferenceDTO;
}

export enum ShippingMethodUpdateDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
