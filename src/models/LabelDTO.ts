import { LangValue } from './LangValue';
import { LabelSizeDTO } from './LabelSizeDTO';

export interface LabelDTO {
  _id?: string;
  version?: number;
  key: string;
  name: LangValue[];
  description: LangValue[];
  location: LabelDTOLocationEnum;
  shape?: LabelDTOShapeEnum;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  size: LabelSizeDTO;
  createdAt: number;
  updatedAt: number;
}

export enum LabelDTOLocationEnum {
    TopLeft = 'top-left',  
    TopRight = 'top-right',  
    BottomLeft = 'bottom-left',  
    BottomRight = 'bottom-right',  
}
export enum LabelDTOShapeEnum {
    Square = 'square',  
    Circle = 'circle',  
}
