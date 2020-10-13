import { BaseAPI } from '../../runtime';
import { OrderImportDTO } from '../../models/OrderImportDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { ShippingDTO } from '../../models/ShippingDTO';
import { CartDraftDTO } from '../../models/CartDraftDTO';
import { TransitionOrderStateDTO } from '../../models/TransitionOrderStateDTO';
import { OrderNoteUpdateDTO } from '../../models/OrderNoteUpdateDTO';
import { OrderStatusUpdateDTO } from '../../models/OrderStatusUpdateDTO';
import { TransitionLineItemQuantityState } from '../../models/TransitionLineItemQuantityState';
import { LineItemDraftDTO } from '../../models/LineItemDraftDTO';
import { QuantityUpdateDTO } from '../../models/QuantityUpdateDTO';
import { DiscountCodeUpdateDTO } from '../../models/DiscountCodeUpdateDTO';
import { ShippingAddressDTO } from '../../models/ShippingAddressDTO';
import { AddressDTO } from '../../models/AddressDTO';
import { ShippingMethodsInfo } from '../../models/ShippingMethodsInfo';
import { PaymentMethodsInfo } from '../../models/PaymentMethodsInfo';
import { PlatformMethodUpdateDTO } from '../../models/PlatformMethodUpdateDTO';
import { MerchantsMethodsUpdateDTO } from '../../models/MerchantsMethodsUpdateDTO';
import { ShippingStatusUpdateDTO } from '../../models/ShippingStatusUpdateDTO';
import { ShippingDeliveryDraftDTO } from '../../models/ShippingDeliveryDraftDTO';
import { ShippingDeliveryParcelDTO } from '../../models/ShippingDeliveryParcelDTO';
import { ShippingDeliveryParcelDraftDTO } from '../../models/ShippingDeliveryParcelDraftDTO';
import { ShippingInterfaceInteractionDraftDTO } from '../../models/ShippingInterfaceInteractionDraftDTO';
import { MakeShippingInteractionDTO } from '../../models/MakeShippingInteractionDTO';
import { PaymentStatusUpdateDTO } from '../../models/PaymentStatusUpdateDTO';
import { PaymentTransactionDraftDTO } from '../../models/PaymentTransactionDraftDTO';
import { PaymentInterfaceInteractionDraftDTO } from '../../models/PaymentInterfaceInteractionDraftDTO';
import { MakePaymentInteractionDTO } from '../../models/MakePaymentInteractionDTO';

export class OrdersAPI extends BaseAPI {
   async importOrders (dto: OrderImportDTO[]): Promise<OrderDTO[]> {
       const response = await this.request({
           path: `/fulfillment/orders/import`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO[];
   }

   async syncShippings (): Promise<ShippingDTO[]> {
       const response = await this.request({
           path: `/fulfillment/orders/sync-shippings`,
           method: 'POST',
           
           
        });
       return (response.json() as unknown) as ShippingDTO[];
   }

   async createCart (dto: CartDraftDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/cart`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getCustomerCart (customerId: string): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/cart/${customerId}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async createOrderFromCart (id: string): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${id}`,
           method: 'POST',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async findOrderById (id: string): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async filterOrders (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/fulfillment/orders`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async deleteExpiredCarts (days: number): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/carts/${days}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async transitionOrderState (orderId: string, dto: TransitionOrderStateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/state`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async updateOrderNote (orderId: string, dto: OrderNoteUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/note`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setOrderStatus (orderId: string, dto: OrderStatusUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/status`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async transitionLineItemQuantityState (orderId: string, dto: TransitionLineItemQuantityState): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/line-items/state`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async addOrderLineItem (orderId: string, dto: LineItemDraftDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/line-items`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async removeOrderLineItem (orderId: string, lineItemId: string): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/line-items/${lineItemId}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setOrderLineItemQuantity (orderId: string, lineItemId: string, dto: QuantityUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/line-items/${lineItemId}/quantity`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setOrderDiscountCode (orderId: string, dto: DiscountCodeUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/discount-code`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async removeOrderDiscountCode (orderId: string, dto: DiscountCodeUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/discount-code`,
           method: 'DELETE',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setOrderShippingAddress (orderId: string, dto: ShippingAddressDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/shipping-address`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setOrderBillingAddress (orderId: string, dto: AddressDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/billing-address`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getOrderShippingMethods (orderId: string): Promise<ShippingMethodsInfo> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/shipping-methods`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as ShippingMethodsInfo;
   }

   async getOrderPaymentMethods (orderId: string): Promise<PaymentMethodsInfo> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/payment-methods`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as PaymentMethodsInfo;
   }

   async setOrderPlatformShippingMethod (orderId: string, dto: PlatformMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/platform-shipping-method`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setOrderMerchantsShippingMethods (orderId: string, dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/merchants-shipping-methods`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setOrderPlatformPaymentMethod (orderId: string, dto: PlatformMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/platform-payment-method`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setOrderMerchantsPaymentMethods (orderId: string, dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/merchants-payment-methods`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setShippingStatus (orderId: string, shippingId: string, dto: ShippingStatusUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/shippings/${shippingId}/status`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async createShippingDelivery (orderId: string, shippingId: string, dto: ShippingDeliveryDraftDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/shippings/${shippingId}/deliveries`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getShippingDeliveryParcelById (orderId: string, shippingId: string, deliveryId: string, parcelId: string): Promise<ShippingDeliveryParcelDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/shippings/${shippingId}/deliveries/${deliveryId}/parcels/${parcelId}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as ShippingDeliveryParcelDTO;
   }

   async updateShippingDeliveryParcel (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: ShippingDeliveryParcelDraftDTO): Promise<ShippingDeliveryParcelDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/shippings/${shippingId}/deliveries/${deliveryId}/parcels/${parcelId}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ShippingDeliveryParcelDTO;
   }

   async createShippingDeliveryParcel (orderId: string, shippingId: string, deliveryId: string, dto: ShippingDeliveryParcelDraftDTO): Promise<ShippingDeliveryParcelDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/shippings/${shippingId}/deliveries/${deliveryId}/parcels`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as ShippingDeliveryParcelDTO;
   }

   async createShippingInterfaceInteraction (orderId: string, shippingId: string, dto: ShippingInterfaceInteractionDraftDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/shippings/${shippingId}/interface-interactions`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async makeShippingInterfaceInteraction (orderId: string, shippingId: string, deliveryId: string, parcelId: string, dto: MakeShippingInteractionDTO): Promise<object> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/shippings/${shippingId}/deliveries/${deliveryId}/parcels/${parcelId}/interface-interactions`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as object;
   }

   async setPaymentStatus (orderId: string, paymentId: string, dto: PaymentStatusUpdateDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/payments/${paymentId}/status`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async createPaymentTransaction (orderId: string, paymentId: string, dto: PaymentTransactionDraftDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/payments/${paymentId}/transactions`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async createPaymentInterfaceInteraction (orderId: string, paymentId: string, dto: PaymentInterfaceInteractionDraftDTO): Promise<OrderDTO> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/payments/${paymentId}/interface-interactions`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async makePaymentInterfaceInteraction (orderId: string, paymentId: string, transactionId: string, dto: MakePaymentInteractionDTO): Promise<object> {
       const response = await this.request({
           path: `/fulfillment/orders/${orderId}/payments/${paymentId}/transactions/${transactionId}/interface-interactions`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as object;
   }

   async getNewOrders (): Promise<object> {
       const response = await this.request({
           path: `/fulfillment/orders/new-orders`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as object;
   }

}
