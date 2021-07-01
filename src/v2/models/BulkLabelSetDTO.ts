
export interface BulkLabelSetDTO {
  filter: string;
  tags: string[];
  labelKey: string;
  validFrom?: number;
  validTo?: number;
}

