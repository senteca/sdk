
export interface CmsRedirectDTO {
  version?: number;
  from: string;
  to: string;
  interfaceKey: string;
  type?: CmsRedirectDTOTypeEnum;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export enum CmsRedirectDTOTypeEnum {
    Permanent = 'permanent',  
    Temporary = 'temporary',  
}
