
export interface OAuthTokenRequestDTO {
  responseMode?: OAuthTokenRequestDTOResponseModeEnum;
  basketRequest?: undefined;
}

export enum OAuthTokenRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
