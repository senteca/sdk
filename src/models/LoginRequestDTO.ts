
export interface LoginRequestDTO {
  email: string;
  password: string;
  isOrgUser?: boolean;
  responseMode?: LoginRequestDTOResponseModeEnum;
  anonymousId?: string;
}

export enum LoginRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
