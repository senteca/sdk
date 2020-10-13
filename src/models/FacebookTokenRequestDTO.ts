
export interface FacebookTokenRequestDTO {
  grantType: FacebookTokenRequestDTOGrantTypeEnum;
  email?: string;
  password?: string;
  refreshToken?: string;
  isOrgUser?: boolean;
  anonymousId?: string;
  facebookId: string;
  facebookToken: string;
}

export enum FacebookTokenRequestDTOGrantTypeEnum {
    Code = 'code',  
    PasswordCredentials = 'password-credentials',  
    ClientCredentials = 'client-credentials',  
    Implicit = 'implicit',  
    RefreshToken = 'refresh-token',  
}
