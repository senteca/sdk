
export interface MakePaymentInteractionDTO {
  type: MakePaymentInteractionDTOTypeEnum;
  payload: any;
}

export enum MakePaymentInteractionDTOTypeEnum {
    GenerateUrl = 'GenerateUrl',  
    VerifyResult = 'VerifyResult',  
    Return = 'Return',  
}
