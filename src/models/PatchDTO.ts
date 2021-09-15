import { PatchOperationDTO } from './PatchOperationDTO';

export interface PatchDTO {
  date: string;
  ref: string;
  ops: PatchOperationDTO[];
}

