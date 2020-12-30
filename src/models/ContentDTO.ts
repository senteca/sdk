import { LangValue } from './LangValue';

export interface ContentDTO {
  key: string;
  label?: LangValue[];
  type: ContentDTOTypeEnum;
  content?: LangValue[];
}

export enum ContentDTOTypeEnum {
    Text = 'text',  
    Html = 'html',  
}
