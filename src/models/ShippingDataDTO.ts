
export interface ShippingDataDTO {
  weight?: number;
  unitOfWeight?: ShippingDataDTOUnitOfWeightEnum;
  length?: number;
  width?: number;
  height?: number;
  unitOfMetric?: ShippingDataDTOUnitOfMetricEnum;
}

export enum ShippingDataDTOUnitOfWeightEnum {
    Gr = 'gr',  
    Oz = 'oz',  
}
export enum ShippingDataDTOUnitOfMetricEnum {
    Cm = 'cm',  
    Inch = 'inch',  
}
