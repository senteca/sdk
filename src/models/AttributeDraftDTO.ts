import { LangValue } from './LangValue';
import { AttributeValueDraftDTO } from './AttributeValueDraftDTO';

export interface AttributeDraftDTO {
  version?: number;
  type: AttributeDraftDTOTypeEnum;
  name: string;
  label?: LangValue[];
  values?: AttributeValueDraftDTO[];
  extra?: any;
}

export enum AttributeDraftDTOTypeEnum {
    Boolean = 'boolean',  
    Number = 'number',  
    Date = 'date',  
    Text = 'text',  
    Enum = 'enum',  
}
