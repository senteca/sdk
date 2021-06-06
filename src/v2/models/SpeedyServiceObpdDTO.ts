
export interface SpeedyServiceObpdDTO {
  option: SpeedyServiceObpdDTOOptionEnum;
  returnShipmentServiceId: number;
  returnShipmentPayer: SpeedyServiceObpdDTOReturnShipmentPayerEnum;
}

export enum SpeedyServiceObpdDTOOptionEnum {
    OPEN = 'OPEN',  
}
export enum SpeedyServiceObpdDTOReturnShipmentPayerEnum {
    SENDER = 'SENDER',  
    RECIPIENT = 'RECIPIENT',  
    THIRD_PARTY = 'THIRD_PARTY',  
}
