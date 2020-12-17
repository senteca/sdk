import { BasketRequestDTO } from './BasketRequestDTO';

export interface OAuthTokenRequestDTO {
  responseMode?: OAuthTokenRequestDTOResponseModeEnum;
  basketRequest: BasketRequestDTO;
}

export enum OAuthTokenRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
