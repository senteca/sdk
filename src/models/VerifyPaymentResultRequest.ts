import { MakePaymentInteractionDTO } from './MakePaymentInteractionDTO';

export interface VerifyPaymentResultRequest {
  authority: VerifyPaymentResultRequestAuthorityEnum;
  merchantKey?: string;
  providerType: string;
  responseMessage: string;
  interaction: MakePaymentInteractionDTO;
}

export enum VerifyPaymentResultRequestAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
