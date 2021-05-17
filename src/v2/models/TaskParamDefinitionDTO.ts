import { TaskParamDefinitionValue } from './TaskParamDefinitionValue';

export interface TaskParamDefinitionDTO {
  name: string;
  type: TaskParamDefinitionDTOTypeEnum;
  required: boolean;
  defaultValue?: string;
  values?: TaskParamDefinitionValue[];
}

export enum TaskParamDefinitionDTOTypeEnum {
    String = 'string',  
    Enum = 'enum',  
    Boolean = 'boolean',  
    Number = 'number',  
}
