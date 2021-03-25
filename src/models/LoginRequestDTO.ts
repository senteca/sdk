
export interface LoginRequestDTO {
  email: string;
  password: string;
  isOrgUser?: boolean;
  responseMode?: LoginRequestDTOResponseModeEnum;
}

export enum LoginRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
