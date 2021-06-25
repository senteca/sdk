import { LangValue } from './LangValue';
import { ContentDTO } from './ContentDTO';

export interface ProductVariantOverridesDTO {
  name?: LangValue[];
  description?: LangValue[];
  content?: ContentDTO[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
}

