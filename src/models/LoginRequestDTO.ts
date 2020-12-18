import { BasketRequestDTO } from './BasketRequestDTO';

export interface LoginRequestDTO {
  email: string;
  password: string;
  isOrgUser?: boolean;
  responseMode?: LoginRequestDTOResponseModeEnum;
  basketRequest?: BasketRequestDTO;
}

export enum LoginRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
