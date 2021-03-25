
export interface OAuthTokenRequestDTO {
  responseMode?: OAuthTokenRequestDTOResponseModeEnum;
}

export enum OAuthTokenRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
