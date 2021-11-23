import { BaseAPI } from '../../runtime';
import { CartDraftDTO, OrderDTO, LineItemDraftDTO, QuantityUpdateDTO, CustomLineItemDraftDTO, DiscountCodeUpdateDTO, AddressDTO, ShippingMethodsInfo, ShippingFeesDTO, PaymentMethodsInfo, PlatformMethodUpdateDTO, MerchantsMethodsUpdateDTO, MethodUpdateDTO, SetCustomFieldDTO, OrderAdditionalInfoUpdateDTO, ProductDTO } from '../../models';

export class MyCartAPI extends BaseAPI {
   async create (dto: CartDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async get (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart`,
           method: 'GET',
        });
       return (response as unknown) as OrderDTO;
   }

   async addLineItem (dto: LineItemDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/line-items`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async deleteLineItem (id: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/line-items/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setLineItemQuantity (lineItemId: string, dto: QuantityUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/line-items/${encodeURIComponent(lineItemId)}/quantity`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async addCustomLineItem (dto: CustomLineItemDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/custom-line-items`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async deleteCustomLineItem (id: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/custom-line-items/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCustomLineItemQuantity (lineItemId: string, dto: QuantityUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/custom-line-items/${encodeURIComponent(lineItemId)}/quantity`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDiscountCode (dto: DiscountCodeUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/discount-code`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async deleteDiscountCode (query: { code: string }): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/discount-code`,
           method: 'DELETE',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as OrderDTO;
   }

   async addWallet (type: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/wallet/type=${encodeURIComponent(type)}`,
           method: 'POST',
        });
       return (response as unknown) as OrderDTO;
   }

   async deleteWallet (type: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/wallet/type=${encodeURIComponent(type)}`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setShippingAddress (dto: AddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/shipping-address`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setBillingAddress (dto: AddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/billing-address`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async getMyShippingMethods (): Promise<ShippingMethodsInfo> {
       const response = await this._request({
           path: `/fulfillment/my-cart/shipping-methods`,
           method: 'GET',
        });
       return (response as unknown) as ShippingMethodsInfo;
   }

   async unsetShippingMethods (): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/shipping-methods`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async getShippingPrice (shippingMethodId: string, dto: LineItemDraftDTO): Promise<ShippingFeesDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/shipping-price/shippingMethodId=${encodeURIComponent(shippingMethodId)}`,
           method: 'GET',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ShippingFeesDTO;
   }

   async getPaymentMethods (): Promise<PaymentMethodsInfo> {
       const response = await this._request({
           path: `/fulfillment/my-cart/payment-methods`,
           method: 'GET',
        });
       return (response as unknown) as PaymentMethodsInfo;
   }

   async setPlatformShippingMethod (dto: PlatformMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/platform-shipping-method`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setMerchantsShippingMethods (dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/merchants-shipping-methods`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setShippingMethod (dto: MethodUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/shipping-method`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async unsetShippingMethod (id: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/shipping-method/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setPlatformPaymentMethod (dto: PlatformMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/platform-payment-method`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setMerchantsPaymentMethods (dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/merchants-payment-methods`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCartCustomField (dto: SetCustomFieldDTO[]): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/custom-field`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCartAdditionalInfo (dto: OrderAdditionalInfoUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/additionalInfo`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async sync (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-cart/sync`,
           method: 'POST',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as OrderDTO;
   }

   async getCrossSaleProducts (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string }): Promise<ProductDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-cart/cross-sale-products`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ProductDTO[];
   }

}
