
export interface CmsRedirectDraftDTO {
  version?: number;
  from: string;
  to: string;
  interfaceKey: string;
  type?: CmsRedirectDraftDTOTypeEnum;
}

export enum CmsRedirectDraftDTOTypeEnum {
    Permanent = 'permanent',  
    Temporary = 'temporary',  
}
