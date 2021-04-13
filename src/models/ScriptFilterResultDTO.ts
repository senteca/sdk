import { ScriptDTO } from './ScriptDTO';

export interface ScriptFilterResultDTO {
  results: ScriptDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

