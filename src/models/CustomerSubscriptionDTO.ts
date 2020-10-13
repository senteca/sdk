
export interface CustomerSubscriptionDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  customerId?: string;
  email: string;
  anonymousId?: string;
  subscriptions: string[];
}

