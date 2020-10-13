
export interface PriceListDraftDTO {
  version?: number;
  key: string;
  name?: string;
  description?: string;
  countryCode: string;
  currencyCode: string;
  taxIncluded: boolean;
}

