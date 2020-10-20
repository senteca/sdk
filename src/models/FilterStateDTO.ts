import { ValueDTO } from './ValueDTO';

export interface FilterStateDTO {
  operator: string;
  label: string;
  field: string;
  componentId: string;
  values: ValueDTO[];
}

