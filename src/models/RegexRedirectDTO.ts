
export interface RegexRedirectDTO {
  version?: number;
  matchingRegex: string;
  transformingRegex: string;
  transformingExpression: string;
  type?: RegexRedirectDTOTypeEnum;
  interfaceKey: string;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export enum RegexRedirectDTOTypeEnum {
    Permanent = 'permanent',  
    Temporary = 'temporary',  
    Reference = 'reference',  
}
