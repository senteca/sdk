
export interface PageDTO {
  version?: number;
  status: PageDTOStatusEnum;
  name: string;
  label: string;
  storeKey: string;
  interfaceKey: string;
  themeKey: string;
  nodes: any[];
  _id: string;
  createdAt: number;
  updatedAt: number;
  hasStagedChanges: boolean;
  stagedNodes: any[];
}

export enum PageDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
}
