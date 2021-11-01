
export interface CustomerProductSubscriptionDTO {
  customerId: string;
  customerEmail: string;
  sku: string;
  quantity: number;
  storeKey: string;
  interfaceKey: string;
  merchantKey?: string;
  priceListKey: string;
  languageCode: string;
  currencyCode: string;
}

