import { MakePaymentInteractionDTO } from './MakePaymentInteractionDTO';

export interface VerifyPaymentResultRequest {
  authority: string;
  merchantKey?: string;
  providerType: string;
  responseMessage: string;
  interaction: MakePaymentInteractionDTO;
}

