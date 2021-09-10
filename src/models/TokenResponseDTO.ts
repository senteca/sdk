
export interface TokenResponseDTO {
  status: TokenResponseDTOStatusEnum;
  accessToken?: string;
  expires?: number;
  refreshToken?: string;
  refreshTokenExpires?: number;
  tokenType?: string;
  responseMode?: TokenResponseDTOResponseModeEnum;
  wishList?: any;
  basket?: any;
}

export enum TokenResponseDTOStatusEnum {
    Success = 'success',  
    RequiresVerification = 'requires-verification',  
}
export enum TokenResponseDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
