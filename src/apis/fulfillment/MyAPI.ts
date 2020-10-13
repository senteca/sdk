import { BaseAPI } from '../../runtime';
import { CartDraftDTO } from '../../models/CartDraftDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { LineItemDraftDTO } from '../../models/LineItemDraftDTO';
import { QuantityUpdateDTO } from '../../models/QuantityUpdateDTO';
import { DiscountCodeUpdateDTO } from '../../models/DiscountCodeUpdateDTO';
import { ShippingAddressDTO } from '../../models/ShippingAddressDTO';
import { AddressDTO } from '../../models/AddressDTO';
import { ShippingMethodsInfo } from '../../models/ShippingMethodsInfo';
import { PaymentMethodsInfo } from '../../models/PaymentMethodsInfo';
import { PlatformMethodUpdateDTO } from '../../models/PlatformMethodUpdateDTO';
import { MerchantsMethodsUpdateDTO } from '../../models/MerchantsMethodsUpdateDTO';
import { MakePaymentResponse } from '../../models/MakePaymentResponse';
import { VerifyPaymentResultRequest } from '../../models/VerifyPaymentResultRequest';
import { WishListDraftDTO } from '../../models/WishListDraftDTO';
import { WishListDTO } from '../../models/WishListDTO';

export class MyAPI extends BaseAPI {
   async createMyCart (dto: CartDraftDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getMyCart (): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async checkMyCart (): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/check`,
           method: 'POST',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async addMyCartLineItem (dto: LineItemDraftDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/line-items`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async removeMyCartLineItem (lineItemId: string): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/line-items/${lineItemId}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setMyCartLineItemQuantity (lineItemId: string, dto: QuantityUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/line-items/${lineItemId}/quantity`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setMyCartDiscountCode (dto: DiscountCodeUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/discount-code`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async removeMyCartDiscountCode (query: { code: string }): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/discount-code`,
           method: 'DELETE',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async addMyCartWallet (type: string): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/wallet/type=${type}`,
           method: 'POST',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async removeMyCartWallet (type: string): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/wallet/type=${type}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setMyShippingAddress (dto: ShippingAddressDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/shipping-address`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setMyBillingAddress (dto: AddressDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/billing-address`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getMyShippingMethods (): Promise<ShippingMethodsInfo> {
       const response = await this.request({
           path: `/fulfillment/my/cart/shipping-methods`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as ShippingMethodsInfo;
   }

   async getMyPaymentMethods (): Promise<PaymentMethodsInfo> {
       const response = await this.request({
           path: `/fulfillment/my/cart/payment-methods`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as PaymentMethodsInfo;
   }

   async setMyPlatformShippingMethod (dto: PlatformMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/platform-shipping-method`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setMyMerchantsShippingMethods (dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/merchants-shipping-methods`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setMyPlatformPaymentMethod (dto: PlatformMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/platform-payment-method`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setMyMerchantsPaymentMethods (dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/merchants-payment-methods`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setMyCartCustomField (): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/cart/custom-field`,
           method: 'PATCH',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getMyOrders (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/fulfillment/my/orders`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createMyOrderFromCart (): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/my/orders`,
           method: 'POST',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async payMyOrder (orderId: string, paymentId: string): Promise<MakePaymentResponse> {
       const response = await this.request({
           path: `/fulfillment/my/orders/${orderId}/payments/${paymentId}/pay`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as MakePaymentResponse;
   }

   async verifyMyPaymentResult (dto: VerifyPaymentResultRequest): Promise<MakePaymentResponse> {
       const response = await this.request({
           path: `/fulfillment/my/orders/verify-payment-result`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as MakePaymentResponse;
   }

   async createMyWishlist (dto: WishListDraftDTO): Promise<WishListDTO> {
       const response = await this.request({
           path: `/fulfillment/my/wish-list`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as WishListDTO;
   }

   async getMyWishList (): Promise<WishListDTO> {
       const response = await this.request({
           path: `/fulfillment/my/wish-list`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as WishListDTO;
   }

   async addMyWishlistProduct (productId: string): Promise<WishListDTO> {
       const response = await this.request({
           path: `/fulfillment/my/wish-list/products/${productId}`,
           method: 'POST',
           
           
        });
       return (response.json() as unknown) as WishListDTO;
   }

   async removeMyWishlistProduct (productId: string): Promise<WishListDTO> {
       const response = await this.request({
           path: `/fulfillment/my/wish-list/products/${productId}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as WishListDTO;
   }

}
