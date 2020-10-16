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
   async import (dto: OrderImportDTO[]): Promise<OrderDTO[]> {
       const response = await this._request({
           path: `/fulfillment/orders/import`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO[];
   }

   async syncShippings (): Promise<ShippingDTO[]> {
       const response = await this._request({
           path: `/fulfillment/orders/shippings/sync`,
           method: 'POST',
           
           
           
        });
       return (response.json() as unknown) as ShippingDTO[];
   }

   async createCart (dto: CartDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/cart`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getCartByCustomerId (customerId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/cart/customerId=${customerId}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getNewOrders (): Promise<object> {
       const response = await this._request({
           path: `/fulfillment/orders/new-orders`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async createFromCart (id: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}`,
           method: 'POST',
           
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getById (id: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/fulfillment/orders`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async deleteCartsOlderThan (days: number): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/carts/olderThan=${days}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setState (id: string, dto: TransitionOrderStateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/state`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setNote (id: string, dto: OrderNoteUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/note`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setStatus (id: string, dto: OrderStatusUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/status`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setLineItemQuantityState (id: string, dto: TransitionLineItemQuantityState): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/line-items`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async addLineItem (id: string, dto: LineItemDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/line-items`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async deleteLineItem (id: string, lineItemId: string): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/line-items/${lineItemId}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setLineItemQuantity (id: string, lineItemId: string, dto: QuantityUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/line-items/${lineItemId}/quantity`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setOrderDiscountCode (id: string, dto: DiscountCodeUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/discount-code`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async deleteDiscountCode (id: string, dto: DiscountCodeUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/discount-code`,
           method: 'DELETE',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setShippingAddress (id: string, dto: ShippingAddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/shipping-address`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setBillingAddress (id: string, dto: AddressDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/billing-address`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getShippingMethods (id: string): Promise<ShippingMethodsInfo> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/shipping-methods`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as ShippingMethodsInfo;
   }

   async getPaymentMethods (id: string): Promise<PaymentMethodsInfo> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/payment-methods`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as PaymentMethodsInfo;
   }

   async setPlatformShippingMethod (id: string, dto: PlatformMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/platform-shipping-method`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setMerchantsShippingMethods (id: string, dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/merchants-shipping-methods`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setPlatformPaymentMethod (id: string, dto: PlatformMethodUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/platform-payment-method`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setMerchantsPaymentMethods (id: string, dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/merchants-payment-methods`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async setShippingStatus (id: string, shippingId: string, dto: ShippingStatusUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/shippings/${shippingId}/status`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async createShippingDelivery (id: string, shippingId: string, dto: ShippingDeliveryDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/shippings/${shippingId}/deliveries`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async getShippingDeliveryParcelById (id: string, shippingId: string, deliveryId: string, parcelId: string): Promise<ShippingDeliveryParcelDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/shippings/${shippingId}/deliveries/${deliveryId}/parcels/${parcelId}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as ShippingDeliveryParcelDTO;
   }

   async updateShippingDeliveryParcel (id: string, shippingId: string, deliveryId: string, parcelId: string, dto: ShippingDeliveryParcelDraftDTO): Promise<ShippingDeliveryParcelDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/shippings/${shippingId}/deliveries/${deliveryId}/parcels/${parcelId}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ShippingDeliveryParcelDTO;
   }

   async createShippingDeliveryParcel (id: string, shippingId: string, deliveryId: string, dto: ShippingDeliveryParcelDraftDTO): Promise<ShippingDeliveryParcelDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/shippings/${shippingId}/deliveries/${deliveryId}/parcels`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ShippingDeliveryParcelDTO;
   }

   async createShippingInterfaceInteraction (id: string, shippingId: string, dto: ShippingInterfaceInteractionDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/shippings/${shippingId}/interface-interactions`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async makeShippingInterfaceInteraction (id: string, shippingId: string, deliveryId: string, parcelId: string, dto: MakeShippingInteractionDTO): Promise<object> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/shippings/${shippingId}/deliveries/${deliveryId}/parcels/${parcelId}/interface-interactions`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as object;
   }

   async setPaymentStatus (id: string, paymentId: string, dto: PaymentStatusUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/payments/${paymentId}/status`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async createPaymentTransaction (id: string, paymentId: string, dto: PaymentTransactionDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/payments/${paymentId}/transactions`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async createPaymentInterfaceInteraction (id: string, paymentId: string, dto: PaymentInterfaceInteractionDraftDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/payments/${paymentId}/interface-interactions`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as OrderDTO;
   }

   async createPaymentTransactionInterfaceInteraction (id: string, paymentId: string, transactionId: string, dto: MakePaymentInteractionDTO): Promise<object> {
       const response = await this._request({
           path: `/fulfillment/orders/${id}/payments/${paymentId}/transactions/${transactionId}/interface-interactions`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as object;
   }

}
