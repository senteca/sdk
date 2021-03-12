import { FormulaDTO } from './FormulaDTO';

export interface CustomSortDraftDTO {
  key: string;
  label?: string;
  description?: string;
  version?: number;
  formula: FormulaDTO[];
}

