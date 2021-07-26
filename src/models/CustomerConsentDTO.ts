
export interface CustomerConsentDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  customerId?: string;
  anonymousId?: string;
  email: string;
  consentKey: string;
  storeKey: string;
}

