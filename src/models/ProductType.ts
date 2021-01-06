import { AttributeRuleDTO } from './AttributeRuleDTO';

export interface ProductType {
  version?: number;
  key: string;
  label?: string;
  attributeRules?: AttributeRuleDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

