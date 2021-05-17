import { TaskParamDefinitionDTO } from './TaskParamDefinitionDTO';

export interface TaskDraftDTO {
  name: string;
  label: string;
  paramDefinitions?: TaskParamDefinitionDTO[];
  externalUrl?: string;
  secret?: string;
}

