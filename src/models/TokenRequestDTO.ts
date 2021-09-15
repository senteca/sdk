
export interface TokenRequestDTO {
  grantType: TokenRequestDTOGrantTypeEnum;
  email?: string;
  password?: string;
  refreshToken?: string;
  isUser?: boolean;
  anonymousId?: string;
  responseMode?: TokenRequestDTOResponseModeEnum;
}

export enum TokenRequestDTOGrantTypeEnum {
    Code = 'code',  
    PasswordCredentials = 'password-credentials',  
    ClientCredentials = 'client-credentials',  
    Implicit = 'implicit',  
    RefreshToken = 'refresh-token',  
}
export enum TokenRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
