
export interface OAuthTokenRequestDTO {
  responseMode?: OAuthTokenRequestDTOResponseModeEnum;
  anonymousId?: string;
}

export enum OAuthTokenRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
