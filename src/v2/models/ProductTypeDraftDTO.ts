import { AttributeRuleDTO } from './AttributeRuleDTO';

export interface ProductTypeDraftDTO {
  version?: number;
  key: string;
  label?: string;
  attributeRules?: AttributeRuleDTO[];
}

