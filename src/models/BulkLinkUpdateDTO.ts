import { IdReferenceDTO } from './IdReferenceDTO';

export interface BulkLinkUpdateDTO {
  filters: string;
  linkType: BulkLinkUpdateDTOLinkTypeEnum;
  links: IdReferenceDTO[];
}

export enum BulkLinkUpdateDTOLinkTypeEnum {
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
    ShippingConfig = 'shipping-config',  
    ShippingMethod = 'shipping-method',  
    PaymentMethod = 'payment-method',  
    State = 'state',  
    CmsFolder = 'cms-folder',  
    CmsType = 'cms-type',  
    StockLocation = 'stock-location',  
    Role = 'role',  
}
