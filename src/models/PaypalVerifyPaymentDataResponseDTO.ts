
export interface PaypalVerifyPaymentDataResponseDTO {
  orderId: string;
  orderNumber?: string;
  successful: boolean;
  transactionAmount: number;
  currencyCode: string;
  transactionNumber: string;
}

