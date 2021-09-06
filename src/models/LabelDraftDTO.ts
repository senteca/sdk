import { LangValue } from './LangValue';
import { LabelSizeDTO } from './LabelSizeDTO';

export interface LabelDraftDTO {
  _id?: string;
  version?: number;
  key: string;
  name: LangValue[];
  description: LangValue[];
  location: LabelDraftDTOLocationEnum;
  shape?: LabelDraftDTOShapeEnum;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  size: LabelSizeDTO;
}

export enum LabelDraftDTOLocationEnum {
    TopLeft = 'top-left',  
    TopRight = 'top-right',  
    BottomLeft = 'bottom-left',  
    BottomRight = 'bottom-right',  
}
export enum LabelDraftDTOShapeEnum {
    Square = 'square',  
    Circle = 'circle',  
}
