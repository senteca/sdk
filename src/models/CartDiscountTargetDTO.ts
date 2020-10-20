
export interface CartDiscountTargetDTO {
  type: CartDiscountTargetDTOTypeEnum;
  predicate: string;
}

export enum CartDiscountTargetDTOTypeEnum {
    LineItems = 'lineItems',  
    Shipping = 'shipping',  
    Subtotal = 'subtotal',  
}
