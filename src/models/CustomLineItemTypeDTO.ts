import { CustomLineItemTypeFieldDTO } from './CustomLineItemTypeFieldDTO';

export interface CustomLineItemTypeDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version: number;
  name: string;
  callbackURL: string;
  fields?: CustomLineItemTypeFieldDTO[];
}

