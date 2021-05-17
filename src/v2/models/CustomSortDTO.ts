import { ConditionDTO } from './ConditionDTO';

export interface CustomSortDTO {
  key: string;
  label?: string;
  description?: string;
  version?: number;
  formula: ConditionDTO[];
  _id: any;
  createdAt: number;
  updatedAt: number;
}

