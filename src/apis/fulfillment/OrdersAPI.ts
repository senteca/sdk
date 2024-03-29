import { BaseAPI } from '../../runtime';
import { OrderImportDTO, OrderDTO, FilterQueryDTO, CartDraftDTO, NewOrders, OrderFilterResultDTO, OrderGrandTotalPrice, TransitionOrderStateDTO, OrderNoteUpdateDTO, OrderAdditionalInfoUpdateDTO, OrderCustomerGroupUpdateDTO, OrderStatusUpdateDTO, SetCustomFieldDTO, TransitionLineItemQuantityState, LineItemDraftDTO, QuantityUpdateDTO, PriceUpdateDTO, DiscountCodeUpdateDTO, AddressDTO, ShippingMethodsInfo, PaymentMethodsInfo, PlatformMethodUpdateDTO, MerchantsMethodsUpdateDTO, ShippingMethodDTO, ShippingMethodUpdateDTO, ShippingStatusUpdateDTO, ShippingGroupedReportsByShippingStatusDTO, ShippingDeliveryDraftDTO, ShippingDeliveryParcelDTO, ShippingDeliveryParcelDraftDTO, ShippingDeliveryParcelStatusUpdateDTO, PaymentStatusUpdateDTO, PaymentTransactionDraftDTO, TaxIncludedUpdateDTO } from '../../models';

export class OrdersAPI extends BaseAPI {
   async import (dto: OrderImportDTO[]): Promise<OrderDTO[]> {
       const response = await this._request({
           path: `/fulfillment/orders/import`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO[];
   }

   async exportCSV (dto: FilterQueryDTO): Promise<any> {
       const response = await this._request({
           path: `/fulfillment/orders/export/csv`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as any;
   }

   async createCart (dto: CartDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/cart`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async getCartByCustomerId (customerId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/cart/customerId=${encodeURIComponent(customerId)}`,
           method: 'GET',
        });
       return (response as unknown) as OrderDTO;
   }

   async getNewOrders (): Promise<NewOrders> {
       const response = await this._request({
           path: `/fulfillment/orders/new-orders`,
           method: 'GET',
        });
       return (response as unknown) as NewOrders;
   }

   async createFromCart (id: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}`,
           method: 'POST',
        });
       return (response as unknown) as OrderDTO;
   }

   async getById (id: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as OrderDTO;
   }

   async deleteById (id: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<OrderFilterResultDTO> {
       const response = await this._request({
           path: `/fulfillment/orders`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as OrderFilterResultDTO;
   }

   async getGrandTotalPrice (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<OrderGrandTotalPrice> {
       const response = await this._request({
           path: `/fulfillment/orders/grand-total-price`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as OrderGrandTotalPrice;
   }

   async getByOrderNumber (number: number): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/number=${encodeURIComponent(number)}`,
           method: 'GET',
        });
       return (response as unknown) as OrderDTO;
   }

   async deleteByOrderNumber (number: number): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/number=${encodeURIComponent(number)}`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async getByOrderRefNumber (ref: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/ref=${encodeURIComponent(ref)}`,
           method: 'GET',
        });
       return (response as unknown) as OrderDTO;
   }

   async deleteByOrderRefNumber (ref: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/ref=${encodeURIComponent(ref)}`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async getByMeta (name: string, value: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/meta/name=${encodeURIComponent(name)}/value=${encodeURIComponent(value)}`,
           method: 'GET',
        });
       return (response as unknown) as OrderDTO;
   }

   async addMeta (orderId: string, name: string, value: string): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(orderId)}/meta/name=${encodeURIComponent(name)}/value=${encodeURIComponent(value)}`,
           method: 'PATCH',
        });
       
   }

   async deleteCartsOlderThan (days: number): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/carts/olderThan=${encodeURIComponent(days)}`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setState (id: string, dto: TransitionOrderStateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/state`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setNote (id: string, dto: OrderNoteUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/note`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setAdditionalInfo (id: string, dto: OrderAdditionalInfoUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/additionalInfo`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCustomerGroup (id: string, dto: OrderCustomerGroupUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/group`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setStatus (id: string, dto: OrderStatusUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/status`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setLineItemQuantityState (id: string, dto: TransitionLineItemQuantityState): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/line-items`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async addLineItem (id: string, dto: LineItemDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/line-items`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async deleteLineItem (id: string, lineItemId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/line-items/${encodeURIComponent(lineItemId)}`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setLineItemQuantity (id: string, lineItemId: string, dto: QuantityUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/line-items/${encodeURIComponent(lineItemId)}/quantity`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setLineItemPrice (id: string, lineItemId: string, dto: PriceUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/line-items/${encodeURIComponent(lineItemId)}/price`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async deleteCustomLineItem (id: string, customLineItemId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/custom-line-item/${encodeURIComponent(customLineItemId)}`,
           method: 'DELETE',
        });
       return (response as unknown) as OrderDTO;
   }

   async setDiscountCode (id: string, dto: DiscountCodeUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/discount-code`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async deleteDiscountCode (id: string, dto: DiscountCodeUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/discount-code`,
           method: 'DELETE',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setShippingAddress (id: string, dto: AddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/shipping-address`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setBillingAddress (id: string, dto: AddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/billing-address`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async getShippingMethods (id: string): Promise<ShippingMethodsInfo> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/shipping-methods`,
           method: 'GET',
        });
       return (response as unknown) as ShippingMethodsInfo;
   }

   async getPaymentMethods (id: string): Promise<PaymentMethodsInfo> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/payment-methods`,
           method: 'GET',
        });
       return (response as unknown) as PaymentMethodsInfo;
   }

   async setPlatformShippingMethod (id: string, dto: PlatformMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/platform-shipping-method`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setMerchantsShippingMethods (id: string, dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/merchants-shipping-methods`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setPlatformPaymentMethod (id: string, dto: PlatformMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/platform-payment-method`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setMerchantsPaymentMethods (id: string, dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/merchants-payment-methods`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async getShippingMethodsPerShipping (id: string, shippingId: string): Promise<ShippingMethodDTO[]> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/shipping-methods`,
           method: 'GET',
        });
       return (response as unknown) as ShippingMethodDTO[];
   }

   async setShippingMethod (id: string, shippingId: string, dto: ShippingMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/shipping-method`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setShippingStatus (id: string, shippingId: string, dto: ShippingStatusUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/status`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async bulkUpdateShippingStatus (dto: ShippingGroupedReportsByShippingStatusDTO): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/orders/bulk/shippings/status`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async createShippingDelivery (id: string, shippingId: string, dto: ShippingDeliveryDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/deliveries`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async getShippingDeliveryParcelById (id: string, shippingId: string, deliveryId: string, parcelId: string): Promise<ShippingDeliveryParcelDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}`,
           method: 'GET',
        });
       return (response as unknown) as ShippingDeliveryParcelDTO;
   }

   async updateShippingDeliveryParcel (id: string, shippingId: string, deliveryId: string, parcelId: string, dto: ShippingDeliveryParcelDraftDTO): Promise<ShippingDeliveryParcelDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ShippingDeliveryParcelDTO;
   }

   async createShippingDeliveryParcel (id: string, shippingId: string, deliveryId: string, dto: ShippingDeliveryParcelDraftDTO): Promise<ShippingDeliveryParcelDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ShippingDeliveryParcelDTO;
   }

   async setShippingDeliveryParcelStatus (id: string, shippingId: string, deliveryId: string, parcelId: string, dto: ShippingDeliveryParcelStatusUpdateDTO): Promise<ShippingDeliveryParcelDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/status`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ShippingDeliveryParcelDTO;
   }

   async setPaymentStatus (id: string, paymentId: string, dto: PaymentStatusUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/payments/${encodeURIComponent(paymentId)}/status`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async createPaymentTransaction (id: string, paymentId: string, dto: PaymentTransactionDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${encodeURIComponent(id)}/payments/${encodeURIComponent(paymentId)}/transactions`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

   async setCustomerCartTaxIncluded (customerId: string, dto: TaxIncludedUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/customerId=${encodeURIComponent(customerId)}/set-tax-included`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

}
