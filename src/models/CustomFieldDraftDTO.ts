import { LangValue } from './LangValue';
import { CustomFieldValueDTO } from './CustomFieldValueDTO';

export interface CustomFieldDraftDTO {
  version?: number;
  type: CustomFieldDraftDTOTypeEnum;
  resourceTypeId: CustomFieldDraftDTOResourceTypeIdEnum;
  name: string;
  label?: LangValue[];
  description?: LangValue[];
  isRequired: boolean;
  isSearchable: boolean;
  values?: CustomFieldValueDTO[];
  defaultValue?: any;
}

export enum CustomFieldDraftDTOTypeEnum {
    String = 'string',  
    Boolean = 'boolean',  
    Number = 'number',  
    Enum = 'enum',  
    StringArray = 'stringArray',  
    NumberArray = 'numberArray',  
    Custom = 'custom',  
}
export enum CustomFieldDraftDTOResourceTypeIdEnum {
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
    Interface = 'interface',  
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
}
