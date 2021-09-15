
export interface PatchOperationDTO {
  op: PatchOperationDTOOpEnum;
  path: string;
  value: any;
  originalValue: any;
}

export enum PatchOperationDTOOpEnum {
    Add = 'add',  
    Remove = 'remove',  
    Replace = 'replace',  
    Move = 'move',  
    Copy = 'copy',  
    Test = 'test',  
}
