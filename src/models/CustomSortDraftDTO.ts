import { ConditionDTO } from './ConditionDTO';

export interface CustomSortDraftDTO {
  key: string;
  label?: string;
  description?: string;
  version?: number;
  formula: ConditionDTO[];
}

