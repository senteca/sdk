
export interface TaskDraftDTO {
  name: string;
  label: string;
  startedAt?: number;
  endedAt?: number;
  isRunning?: boolean;
  executionStatus?: TaskDraftDTOExecutionStatusEnum;
  externalUrl?: string;
  secret?: string;
  meta?: any;
}

export enum TaskDraftDTOExecutionStatusEnum {
    Completed = 'completed',  
    Failed = 'failed',  
}
