import { LangValue } from './LangValue';

export interface CustomLineItemTypeFieldDTO {
  path: string;
  type: CustomLineItemTypeFieldDTOTypeEnum;
  label: LangValue[];
  isVisible?: boolean;
}

export enum CustomLineItemTypeFieldDTOTypeEnum {
    String = 'String',  
    PDF = 'PDF',  
    Number = 'Number',  
}
