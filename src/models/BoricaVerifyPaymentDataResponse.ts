
export interface BoricaVerifyPaymentDataResponse {
  orderId: string;
  orderNumber?: string;
  verified: boolean;
  successful: boolean;
  transactionAmount: number;
  currencyCode: string;
  transactionCode: string;
  responseCode: string;
  message: string;
  error: string;
}

