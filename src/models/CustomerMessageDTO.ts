
export interface CustomerMessageDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  customerId: string;
  type?: string;
  message: string;
  data?: object;
}

