
export interface BulkLabelSetDTO {
  filter: string;
  tags: string[];
  labelId: string;
  validFrom?: number;
  validTo?: number;
}

