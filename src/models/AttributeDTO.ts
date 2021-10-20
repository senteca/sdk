import { AttributeValueDTO } from './AttributeValueDTO';
import { LangValue } from './LangValue';

export interface AttributeDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  totalValues?: number;
  values?: AttributeValueDTO[];
  version?: number;
  type: AttributeDTOTypeEnum;
  name: string;
  label?: LangValue[];
  extra?: any;
}

export enum AttributeDTOTypeEnum {
    Boolean = 'boolean',  
    Number = 'number',  
    Date = 'date',  
    Text = 'text',  
    Enum = 'enum',  
}
