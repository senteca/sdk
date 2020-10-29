
export interface PriceListDTO {
  version?: number;
  key: string;
  name?: string;
  description?: string;
  countryCode: string;
  currencyCode: string;
  taxIncluded: boolean;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

