
export interface TokenRequestDTO {
  grantType: TokenRequestDTOGrantTypeEnum;
  email?: string;
  password?: string;
  refreshToken?: string;
  isOrgUser?: boolean;
  anonymousId?: string;
  responseMode?: TokenRequestDTOResponseModeEnum;
  basketRequest?: undefined;
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
