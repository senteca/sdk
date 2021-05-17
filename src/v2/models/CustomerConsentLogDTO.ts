
export interface CustomerConsentLogDTO {
  _id: string;
  customerId?: string;
  anonymousId?: string;
  email: string;
  consentKey: string;
  date: number;
  consent: boolean;
}

