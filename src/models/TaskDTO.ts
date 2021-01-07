
export interface TaskDTO {
  name: string;
  label: string;
  startedAt?: number;
  endedAt?: number;
  isRunning?: boolean;
  executionStatus?: TaskDTOExecutionStatusEnum;
  externalUrl?: string;
  secret?: string;
  meta?: any;
  _id: string;
}

export enum TaskDTOExecutionStatusEnum {
    Completed = 'completed',  
    Failed = 'failed',  
}
