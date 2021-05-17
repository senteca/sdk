import { ScriptCategoryDTO } from './ScriptCategoryDTO';

export interface ScriptCategoryFilterResultDTO {
  results: ScriptCategoryDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

