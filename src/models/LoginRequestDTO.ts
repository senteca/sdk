
export interface LoginRequestDTO {
  email: string;
  password: string;
  isUser?: boolean;
  responseMode?: LoginRequestDTOResponseModeEnum;
  anonymousId?: string;
}

export enum LoginRequestDTOResponseModeEnum {
    Compact = 'compact',  
    Full = 'full',  
}
