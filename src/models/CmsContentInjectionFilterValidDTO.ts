import { ComponentInjectionDTO } from './ComponentInjectionDTO';

export interface CmsContentInjectionFilterValidDTO {
  _id: string;
  context: string;
  regex: string;
  components: ComponentInjectionDTO[];
}

