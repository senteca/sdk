
export interface PaymentStatusUpdateDTO {
  status: PaymentStatusUpdateDTOStatusEnum;
}

export enum PaymentStatusUpdateDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Success = 'Success',  
    Failure = 'Failure',  
}
