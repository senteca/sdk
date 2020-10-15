import { LocalizedString } from './LocalizedString';
import { CustomFieldValueDTO } from './CustomFieldValueDTO';

export interface CustomFieldDraftDTO {
  type: CustomFieldDraftDTOTypeEnum;
  resourceTypeId: CustomFieldDraftDTOResourceTypeIdEnum;
  name: string;
  label?: LocalizedString;
  description?: LocalizedString;
  isRequired: boolean;
  isSearchable: boolean;
  values?: CustomFieldValueDTO[];
  defaultValue?: object;
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
    StockLocation = 'stock-location',  
}
