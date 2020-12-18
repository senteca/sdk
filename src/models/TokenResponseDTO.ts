
export interface TokenResponseDTO {
  accessToken: string;
  expires: number;
  refreshToken?: string;
  refreshTokenExpires?: number;
  tokenType?: string;
  responseMode?: TokenResponseDTOResponseModeEnum;
  wishList?: any;
  basket?: any;
}

export enum TokenResponseDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
