
export interface SpeedyServiceCodDTO {
  amount: string;
  processingType: SpeedyServiceCodDTOProcessingTypeEnum;
}

export enum SpeedyServiceCodDTOProcessingTypeEnum {
    CASH = 'CASH',  
    POSTAL_MONEY_TRANSFER = 'POSTAL_MONEY_TRANSFER',  
}
