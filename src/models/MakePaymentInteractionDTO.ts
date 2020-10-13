
export interface MakePaymentInteractionDTO {
  type: MakePaymentInteractionDTOTypeEnum;
  payload: object;
}

export enum MakePaymentInteractionDTOTypeEnum {
    GenerateUrl = 'GenerateUrl',  
    VerifyResult = 'VerifyResult',  
    Return = 'Return',  
}
