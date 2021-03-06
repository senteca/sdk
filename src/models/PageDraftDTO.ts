
export interface PageDraftDTO {
  version?: number;
  status: PageDraftDTOStatusEnum;
  name: string;
  label: string;
  storeKey: string;
  interfaceKey: string;
  themeKey: string;
  nodes: any[];
}

export enum PageDraftDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
}
