
export interface CustomerSubscriptionDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  customerId?: string;
  anonymousId?: string;
  email: string;
  subscriptions: string[];
}

