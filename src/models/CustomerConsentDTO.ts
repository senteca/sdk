
export interface CustomerConsentDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  customerId?: string;
  anonymousId?: string;
  approved?: boolean;
  confirmed?: boolean;
  confirmationToken?: string;
  email: string;
  consentKey: string;
  storeKey: string;
}

