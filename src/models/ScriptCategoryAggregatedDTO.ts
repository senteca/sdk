import { ScriptAggregatedDTO } from './ScriptAggregatedDTO';

export interface ScriptCategoryAggregatedDTO {
  key: string;
  name?: string;
  description?: string;
  isRequired?: boolean;
  scripts?: ScriptAggregatedDTO[];
}

