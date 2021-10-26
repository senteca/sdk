
export interface PaypalCaptureRequestDTO {
  token: string;
  orderId: string;
  paymentId: string;
  transactionId: string;
}

