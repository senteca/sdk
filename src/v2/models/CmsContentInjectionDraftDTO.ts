import { ComponentInjectionDTO } from './ComponentInjectionDTO';

export interface CmsContentInjectionDraftDTO {
  version?: number;
  key: string;
  interfaceKey: string;
  context: string;
  regex: string;
  filter: string;
  components: ComponentInjectionDTO[];
}

