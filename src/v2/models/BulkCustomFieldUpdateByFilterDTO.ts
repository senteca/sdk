import { SetCustomFieldDTO } from './SetCustomFieldDTO';

export interface BulkCustomFieldUpdateByFilterDTO {
  predicate: any;
  customFields: SetCustomFieldDTO[];
}

