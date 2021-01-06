import { LangValue } from './LangValue';
import { AttributeValueDTO } from './AttributeValueDTO';

export interface AttributeDTO {
  version?: number;
  type: AttributeDTOTypeEnum;
  name: string;
  label?: LangValue[];
  values?: AttributeValueDTO[];
  extra?: any;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export enum AttributeDTOTypeEnum {
    Boolean = 'boolean',  
    Number = 'number',  
    Text = 'text',  
    Date = 'date',  
    Enum = 'enum',  
}
