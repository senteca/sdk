
export interface TaskExecutionDTO {
  _id: string;
  sequence: number;
  status: TaskExecutionDTOStatusEnum;
  startedAt: number;
  finishedAt?: number;
  usedParams?: any;
  info?: string;
}

export enum TaskExecutionDTOStatusEnum {
    Running = 'running',  
    Completed = 'completed',  
    Failed = 'failed',  
}
