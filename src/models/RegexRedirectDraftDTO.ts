
export interface RegexRedirectDraftDTO {
  version?: number;
  matchingRegex: string;
  transformingRegex: string;
  transformingExpression: string;
  type?: RegexRedirectDraftDTOTypeEnum;
  interfaceKey: string;
}

export enum RegexRedirectDraftDTOTypeEnum {
    Permanent = 'permanent',  
    Temporary = 'temporary',  
    Reference = 'reference',  
}
