
export interface AttributeRuleDTO {
  attributeName: string;
  isRequired: boolean;
  isSearchable: boolean;
  allowMultiple: boolean;
  constraint: AttributeRuleDTOConstraintEnum;
  selectability: AttributeRuleDTOSelectabilityEnum;
  componentHint?: string;
  tags?: string[];
}

export enum AttributeRuleDTOConstraintEnum {
    None = 'none',  
    Unique = 'unique',  
    CombinationUnique = 'combination-unique',  
    SameForAll = 'same-for-all',  
}
export enum AttributeRuleDTOSelectabilityEnum {
    None = 'none',  
    Primary = 'primary',  
    Secondary = 'secondary',  
}
