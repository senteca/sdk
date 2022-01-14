import { LangValue } from './LangValue';
import { AttributeGroupValueDraftDTO } from './AttributeGroupValueDraftDTO';

export interface AttributeGroupDraftDTO {
  version?: number;
  name: string;
  label?: LangValue[];
  values?: AttributeGroupValueDraftDTO[];
  extra?: any;
}

