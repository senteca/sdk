
export interface BaseCurrencyConversion {
  currencyCode: string;
  conversionRate: number;
  roundingRule: BaseCurrencyConversionRoundingRuleEnum;
}

export enum BaseCurrencyConversionRoundingRuleEnum {
    Default = 'default',  
    Up_00 = 'up_00',  
    Down_00 = 'down_00',  
    Nearest_00 = 'nearest_00',  
    Up_99 = 'up_99',  
    Down_99 = 'down_99',  
    Nearest_99 = 'nearest_99',  
    Up_95 = 'up_95',  
    Down_95 = 'down_95',  
    Nearest_95 = 'nearest_95',  
    Up_90 = 'up_90',  
    Down_90 = 'down_90',  
    Nearest_90 = 'nearest_90',  
    Up_75 = 'up_75',  
    Down_75 = 'down_75',  
    Nearest_75 = 'nearest_75',  
    Up_50 = 'up_50',  
    Down_50 = 'down_50',  
    Nearest_50 = 'nearest_50',  
    Up_25 = 'up_25',  
    Down_25 = 'down_25',  
    Nearest_25 = 'nearest_25',  
}
