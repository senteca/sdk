
export interface BoricaVerifyPaymentDataRequest {
  ACTION: string;
  AMOUNT: string;
  APPROVAL: string;
  CARD: string;
  CURRENCY: string;
  ECI: string;
  INT_REF: string;
  LANG?: string;
  NONCE: string;
  ORDER: string;
  PARES_STATUS?: string;
  P_SIGN: string;
  RC: string;
  RRN: string;
  STATUSMSG: string;
  TERMINAL: string;
  TIMESTAMP: string;
  TRAN_DATE: string;
  TRTYPE: string;
}

