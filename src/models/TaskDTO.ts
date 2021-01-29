import { TaskParamDefinitionDTO } from './TaskParamDefinitionDTO';
import { TaskExecutionDTO } from './TaskExecutionDTO';

export interface TaskDTO {
  name: string;
  label: string;
  paramDefinitions?: TaskParamDefinitionDTO[];
  externalUrl?: string;
  secret?: string;
  _id: string;
  executionHistory?: TaskExecutionDTO[];
}

