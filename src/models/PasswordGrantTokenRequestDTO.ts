import { BasketRequestDTO } from './BasketRequestDTO';

export interface PasswordGrantTokenRequestDTO {
  email: string;
  password: string;
  isOrgUser?: boolean;
  responseMode?: PasswordGrantTokenRequestDTOResponseModeEnum;
  basketRequest: BasketRequestDTO;
}

export enum PasswordGrantTokenRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
