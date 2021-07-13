import { ComponentInjectionDTO } from './ComponentInjectionDTO';

export interface CmsContentInjectionDTO {
  version?: number;
  key: string;
  interfaceKey: string;
  context: string;
  regex: string;
  filter: string;
  components: ComponentInjectionDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

