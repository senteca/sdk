import { LangValue } from './LangValue';
import { OptionDTO } from './OptionDTO';

export interface OptionDefinitionDTO {
  key: string;
  label: LangValue[];
  options: OptionDTO[];
}

