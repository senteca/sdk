
export interface MakeShippingInteractionDTO {
  type: MakeShippingInteractionDTOTypeEnum;
  payload: object;
}

export enum MakeShippingInteractionDTOTypeEnum {
    CreateShipping = 'CreateShipping',  
    CheckShipping = 'CheckShipping',  
    SendShipping = 'SendShipping',  
    TrackShipping = 'TrackShipping',  
}
