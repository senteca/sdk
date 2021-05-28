/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { OrderImportDTO } from '../../models/OrderImportDTO';
import { OrderDTO } from '../../models/OrderDTO';
import { CartDraftDTO } from '../../models/CartDraftDTO';
import { NewOrders } from '../../models/NewOrders';
import { OrderFilterResultDTO } from '../../models/OrderFilterResultDTO';
import { TransitionOrderStateDTO } from '../../models/TransitionOrderStateDTO';
import { OrderNoteUpdateDTO } from '../../models/OrderNoteUpdateDTO';
import { OrderCustomerGroupUpdateDTO } from '../../models/OrderCustomerGroupUpdateDTO';
import { OrderStatusUpdateDTO } from '../../models/OrderStatusUpdateDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';
import { TransitionLineItemQuantityState } from '../../models/TransitionLineItemQuantityState';
import { LineItemDraftDTO } from '../../models/LineItemDraftDTO';
import { QuantityUpdateDTO } from '../../models/QuantityUpdateDTO';
import { DiscountCodeUpdateDTO } from '../../models/DiscountCodeUpdateDTO';
import { AddressDTO } from '../../models/AddressDTO';
import { ShippingMethodsInfo } from '../../models/ShippingMethodsInfo';
import { PaymentMethodsInfo } from '../../models/PaymentMethodsInfo';
import { PlatformMethodUpdateDTO } from '../../models/PlatformMethodUpdateDTO';
import { MerchantsMethodsUpdateDTO } from '../../models/MerchantsMethodsUpdateDTO';
import { ShippingMethodDTO } from '../../models/ShippingMethodDTO';
import { ShippingMethodUpdateDTO } from '../../models/ShippingMethodUpdateDTO';
import { ShippingStatusUpdateDTO } from '../../models/ShippingStatusUpdateDTO';
import { ShippingDeliveryDraftDTO } from '../../models/ShippingDeliveryDraftDTO';
import { ShippingDeliveryParcelDTO } from '../../models/ShippingDeliveryParcelDTO';
import { ShippingDeliveryParcelDraftDTO } from '../../models/ShippingDeliveryParcelDraftDTO';
import { ShippingDeliveryParcelStatusUpdateDTO } from '../../models/ShippingDeliveryParcelStatusUpdateDTO';
import { PaymentStatusUpdateDTO } from '../../models/PaymentStatusUpdateDTO';
import { PaymentTransactionDraftDTO } from '../../models/PaymentTransactionDraftDTO';

export const OrdersImport = async (dto: OrderImportDTO[]): Promise<OrderDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/import`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO[];
}

export const OrdersExportCSV = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<any> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/export/csv`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as any;
}

export const OrdersCreateCart = async (dto: CartDraftDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/cart`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersGetCartByCustomerId = async (customerId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/cart/customerId=${encodeURIComponent(customerId)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersGetNewOrders = async (): Promise<NewOrders> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/new-orders`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as NewOrders;
}

export const OrdersCreateFromCart = async (id: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}`,
        method: 'POST',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersGetById = async (id: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<OrderFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as OrderFilterResultDTO;
}

export const OrdersGetByMeta = async (name: string, value: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/meta/name=${encodeURIComponent(name)}/value=${encodeURIComponent(value)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersDeleteCartsOlderThan = async (days: number): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/carts/olderThan=${encodeURIComponent(days)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetState = async (id: string, dto: TransitionOrderStateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/state`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetNote = async (id: string, dto: OrderNoteUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/note`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetCustomerGroup = async (id: string, dto: OrderCustomerGroupUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/group`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetStatus = async (id: string, dto: OrderStatusUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/status`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetLineItemQuantityState = async (id: string, dto: TransitionLineItemQuantityState): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/line-items`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersAddLineItem = async (id: string, dto: LineItemDraftDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/line-items`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersDeleteLineItem = async (id: string, lineItemId: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/line-items/${encodeURIComponent(lineItemId)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetLineItemQuantity = async (id: string, lineItemId: string, dto: QuantityUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/line-items/${encodeURIComponent(lineItemId)}/quantity`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetDiscountCode = async (id: string, dto: DiscountCodeUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/discount-code`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersDeleteDiscountCode = async (id: string, dto: DiscountCodeUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/discount-code`,
        method: 'DELETE',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetShippingAddress = async (id: string, dto: AddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/shipping-address`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetBillingAddress = async (id: string, dto: AddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/billing-address`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersGetShippingMethods = async (id: string): Promise<ShippingMethodsInfo> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/shipping-methods`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as ShippingMethodsInfo;
}

export const OrdersGetPaymentMethods = async (id: string): Promise<PaymentMethodsInfo> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/payment-methods`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as PaymentMethodsInfo;
}

export const OrdersSetPlatformShippingMethod = async (id: string, dto: PlatformMethodUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/platform-shipping-method`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetMerchantsShippingMethods = async (id: string, dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/merchants-shipping-methods`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetPlatformPaymentMethod = async (id: string, dto: PlatformMethodUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/platform-payment-method`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetMerchantsPaymentMethods = async (id: string, dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/merchants-payment-methods`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersGetShippingMethodsPerShipping = async (id: string, shippingId: string): Promise<ShippingMethodDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/shipping-methods`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as ShippingMethodDTO[];
}

export const OrdersSetShippingMethod = async (id: string, shippingId: string, dto: ShippingMethodUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/shipping-method`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersSetShippingStatus = async (id: string, shippingId: string, dto: ShippingStatusUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/status`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersCreateShippingDelivery = async (id: string, shippingId: string, dto: ShippingDeliveryDraftDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/deliveries`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersGetShippingDeliveryParcelById = async (id: string, shippingId: string, deliveryId: string, parcelId: string): Promise<ShippingDeliveryParcelDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as ShippingDeliveryParcelDTO;
}

export const OrdersUpdateShippingDeliveryParcel = async (id: string, shippingId: string, deliveryId: string, parcelId: string, dto: ShippingDeliveryParcelDraftDTO): Promise<ShippingDeliveryParcelDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as ShippingDeliveryParcelDTO;
}

export const OrdersCreateShippingDeliveryParcel = async (id: string, shippingId: string, deliveryId: string, dto: ShippingDeliveryParcelDraftDTO): Promise<ShippingDeliveryParcelDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as ShippingDeliveryParcelDTO;
}

export const OrdersSetShippingDeliveryParcelStatus = async (id: string, shippingId: string, deliveryId: string, parcelId: string, dto: ShippingDeliveryParcelStatusUpdateDTO): Promise<ShippingDeliveryParcelDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/shippings/${encodeURIComponent(shippingId)}/deliveries/${encodeURIComponent(deliveryId)}/parcels/${encodeURIComponent(parcelId)}/status`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as ShippingDeliveryParcelDTO;
}

export const OrdersSetPaymentStatus = async (id: string, paymentId: string, dto: PaymentStatusUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/payments/${encodeURIComponent(paymentId)}/status`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const OrdersCreatePaymentTransaction = async (id: string, paymentId: string, dto: PaymentTransactionDraftDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/orders/${encodeURIComponent(id)}/payments/${encodeURIComponent(paymentId)}/transactions`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

