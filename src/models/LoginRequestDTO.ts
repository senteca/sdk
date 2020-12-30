
export interface LoginRequestDTO {
  email: string;
  password: string;
  isOrgUser?: boolean;
  responseMode?: LoginRequestDTOResponseModeEnum;
  basketRequest?: undefined;
}

export enum LoginRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
