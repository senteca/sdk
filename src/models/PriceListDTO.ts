
export interface PriceListDTO {
  version?: number;
  key: string;
  name?: string;
  description?: string;
  countryCode: string;
  currencyCode: string;
  taxIncluded: boolean;
  id: string;
  createdAt: number;
  updatedAt: number;
}

