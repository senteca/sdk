
export interface AddonRequestBodyDTO {
  type: AddonRequestBodyDTOTypeEnum;
}

export enum AddonRequestBodyDTOTypeEnum {
    PageSubmit = 'page-submit',  
    Generic = 'generic',  
}
