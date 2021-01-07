import { TaskDTO } from './TaskDTO';

export interface TaskFilterResultDTO {
  results: TaskDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

