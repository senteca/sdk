
export interface EmailVerificationResponseDTO {
  status: EmailVerificationResponseDTOStatusEnum;
}

export enum EmailVerificationResponseDTOStatusEnum {
    Success = 'success',  
    AlreadyVerified = 'already-verified',  
    Invalid = 'invalid',  
}
