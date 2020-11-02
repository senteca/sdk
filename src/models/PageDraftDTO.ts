
export interface PageDraftDTO {
  version?: number;
  status: PageDraftDTOStatusEnum;
  name: string;
  storeKey: string;
  interfaceKey: string;
  themeKey: string;
  nodes: object[];
}

export enum PageDraftDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
}
