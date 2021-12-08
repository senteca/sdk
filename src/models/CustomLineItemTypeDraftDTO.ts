import { CustomLineItemTypeFieldDTO } from './CustomLineItemTypeFieldDTO';

export interface CustomLineItemTypeDraftDTO {
  version?: number;
  name: string;
  callbackURL: string;
  fields?: CustomLineItemTypeFieldDTO[];
}

