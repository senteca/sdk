
export interface SetCustomFieldDTO {
  resourceId: string;
  resourceType: SetCustomFieldDTOResourceTypeEnum;
  fieldName: string;
  fieldValue: object;
}

export enum SetCustomFieldDTOResourceTypeEnum {
    Store = 'store',  
    Address = 'address',  
    Brand = 'brand',  
    Category = 'category',  
    Collection = 'collection',  
    View = 'view',  
    Wallet = 'wallet',  
    WalletType = 'wallet-type',  
    Customer = 'customer',  
    CustomerGroup = 'customer-group',  
    ProductDiscount = 'product-discount',  
    CartDiscount = 'cart-discount',  
    DiscountCode = 'discount-code',  
    Item = 'item',  
    Order = 'order',  
    Payment = 'payment',  
    Merchant = 'merchant',  
    Product = 'product',  
    Shipping = 'shipping',  
    TaxCategory = 'tax-category',  
    PriceList = 'price-list',  
    ShippingMethod = 'shipping-method',  
    PaymentMethod = 'payment-method',  
    State = 'state',  
    CmsFolder = 'cms-folder',  
    CmsType = 'cms-type',  
}
