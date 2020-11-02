
export interface PageDTO {
  version?: number;
  status: PageDTOStatusEnum;
  name: string;
  storeKey: string;
  interfaceKey: string;
  themeKey: string;
  nodes: object[];
  _id: string;
  createdAt: number;
  updatedAt: number;
  hasStagedChanges: boolean;
  stagedNodes: object[];
}

export enum PageDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
}
