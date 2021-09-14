import { LangValue } from './LangValue';
import { UpdateAttributeValueDTO } from './UpdateAttributeValueDTO';

export interface UpdateAttributeDTO {
  version?: number;
  type: UpdateAttributeDTOTypeEnum;
  name: string;
  label?: LangValue[];
  values?: UpdateAttributeValueDTO[];
  extra?: any;
}

export enum UpdateAttributeDTOTypeEnum {
    Boolean = 'boolean',  
    Number = 'number',  
    Date = 'date',  
    Text = 'text',  
    Enum = 'enum',  
}
