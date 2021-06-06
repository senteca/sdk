
export interface BaseCurrencyConversion {
  currencyCode: string;
  conversionRate: number;
  roundingRule: BaseCurrencyConversionRoundingRuleEnum;
}

export enum BaseCurrencyConversionRoundingRuleEnum {
    Default = 'default',  
    UP_0 = 'UP_0',  
    DOWN_0 = 'DOWN_0',  
    NEAREST_0 = 'NEAREST_0',  
    UP_99 = 'UP_99',  
    DOWN_99 = 'DOWN_99',  
    NEAREST_99 = 'NEAREST_99',  
    UP_95 = 'UP_95',  
    DOWN_95 = 'DOWN_95',  
    NEAREST_95 = 'NEAREST_95',  
    UP_90 = 'UP_90',  
    DOWN_90 = 'DOWN_90',  
    NEAREST_90 = 'NEAREST_90',  
    UP_75 = 'UP_75',  
    DOWN_75 = 'DOWN_75',  
    NEAREST_75 = 'NEAREST_75',  
    UP_50 = 'UP_50',  
    DOWN_50 = 'DOWN_50',  
    NEAREST_50 = 'NEAREST_50',  
    UP_25 = 'UP_25',  
    DOWN_25 = 'DOWN_25',  
    NEAREST_25 = 'NEAREST_25',  
}
