import { LangValue } from './LangValue';
import { AttributeValueDTO } from './AttributeValueDTO';

export interface AttributeDraftDTO {
  version?: number;
  type: AttributeDraftDTOTypeEnum;
  name: string;
  label?: LangValue[];
  values?: AttributeValueDTO[];
  extra?: any;
}

export enum AttributeDraftDTOTypeEnum {
    Boolean = 'boolean',  
    Number = 'number',  
    Date = 'date',  
    Text = 'text',  
    Enum = 'enum',  
}
