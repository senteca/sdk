
export interface AccessTokenDTO {
  accessToken: string;
  expires: number;
  refreshToken?: string;
  refreshTokenExpires?: number;
  tokenType: string;
}

