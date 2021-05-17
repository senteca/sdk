
export interface BaseCurrencyConversion {
  currencyCode: string;
  conversionRate: number;
  roundingRule: BaseCurrencyConversionRoundingRuleEnum;
}

export enum BaseCurrencyConversionRoundingRuleEnum {
    Default = 'default',  
}
