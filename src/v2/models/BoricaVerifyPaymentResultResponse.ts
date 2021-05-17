
export interface BoricaVerifyPaymentResultResponse {
  orderId: string;
  verified: boolean;
  successful: boolean;
  transactionAmount: number;
  currencyCode: string;
  transactionCode: string;
  responseCode: string;
  message: string;
}

