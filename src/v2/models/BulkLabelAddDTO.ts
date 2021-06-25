
export interface BulkLabelAddDTO {
  filter: string;
  tags: string[];
  labelId: string;
  validFrom?: number;
  validTo?: number;
}

