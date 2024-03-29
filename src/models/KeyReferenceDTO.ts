
export interface KeyReferenceDTO {
  resourceKey: string;
  resourceType: KeyReferenceDTOResourceTypeEnum;
  resource?: any;
}

export enum KeyReferenceDTOResourceTypeEnum {
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
    Voucher = 'voucher',  
    VoucherTemplate = 'voucher-template',  
    Item = 'item',  
    Order = 'order',  
    Payment = 'payment',  
    Merchant = 'merchant',  
    Product = 'product',  
    ProductType = 'product-type',  
    Shipping = 'shipping',  
    TaxCategory = 'tax-category',  
    PriceList = 'price-list',  
    ShippingConfig = 'shipping-config',  
    ShippingMethod = 'shipping-method',  
    PaymentMethod = 'payment-method',  
    State = 'state',  
    CmsFolder = 'cms-folder',  
    CmsType = 'cms-type',  
    StockLocation = 'stock-location',  
    Role = 'role',  
    Zone = 'zone',  
    ProductVariant = 'product-variant',  
    ShippingSender = 'shipping-sender',  
    Addon = 'addon',  
    User = 'user',  
}
