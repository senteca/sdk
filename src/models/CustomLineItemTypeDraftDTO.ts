import { CustomLineItemTypeFieldDTO } from './CustomLineItemTypeFieldDTO';

export interface CustomLineItemTypeDraftDTO {
  name: string;
  callbackURL: string;
  fields: CustomLineItemTypeFieldDTO[];
}

