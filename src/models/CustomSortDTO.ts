import { FormulaDTO } from './FormulaDTO';

export interface CustomSortDTO {
  key: string;
  label?: string;
  description?: string;
  version?: number;
  formula: FormulaDTO[];
  _id: any;
  createdAt: number;
  updatedAt: number;
}

