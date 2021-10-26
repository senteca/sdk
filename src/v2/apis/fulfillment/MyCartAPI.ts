/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CartDraftDTO, OrderDTO, LineItemDraftDTO, QuantityUpdateDTO, CustomLineItemDraftDTO, DiscountCodeUpdateDTO, AddressDTO, ShippingMethodsInfo, ShippingFeesDTO, PaymentMethodsInfo, PlatformMethodUpdateDTO, MerchantsMethodsUpdateDTO, MethodUpdateDTO, SetCustomFieldDTO, OrderAdditionalInfoUpdateDTO, ProductDTO } from '../../../models';

export const MyCartCreate = async (dto: CartDraftDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartGet = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart`,
        method: 'GET',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartAddLineItem = async (dto: LineItemDraftDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/line-items`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartDeleteLineItem = async (id: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/line-items/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSetLineItemQuantity = async (lineItemId: string, dto: QuantityUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/line-items/${encodeURIComponent(lineItemId)}/quantity`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartAddCustomLineItem = async (dto: CustomLineItemDraftDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/custom-line-items`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartDeleteCustomLineItem = async (id: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/custom-line-items/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSetCustomLineItemQuantity = async (lineItemId: string, dto: QuantityUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/custom-line-items/${encodeURIComponent(lineItemId)}/quantity`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSetDiscountCode = async (dto: DiscountCodeUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/discount-code`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartDeleteDiscountCode = async (query: { code: string }): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/discount-code`,
        method: 'DELETE',
        query: toQueryString(query),
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartAddWallet = async (type: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/wallet/type=${encodeURIComponent(type)}`,
        method: 'POST',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartDeleteWallet = async (type: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/wallet/type=${encodeURIComponent(type)}`,
        method: 'DELETE',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSetShippingAddress = async (dto: AddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/shipping-address`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSetBillingAddress = async (dto: AddressDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/billing-address`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartGetMyShippingMethods = async (): Promise<ShippingMethodsInfo> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/shipping-methods`,
        method: 'GET',
    });
    return (response as unknown) as ShippingMethodsInfo;
}

export const MyCartUnsetShippingMethods = async (): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/shipping-methods`,
        method: 'DELETE',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartGetShippingPrice = async (shippingMethodId: string, dto: LineItemDraftDTO): Promise<ShippingFeesDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/shipping-price/shippingMethodId=${encodeURIComponent(shippingMethodId)}`,
        method: 'GET',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ShippingFeesDTO;
}

export const MyCartGetPaymentMethods = async (): Promise<PaymentMethodsInfo> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/payment-methods`,
        method: 'GET',
    });
    return (response as unknown) as PaymentMethodsInfo;
}

export const MyCartSetPlatformShippingMethod = async (dto: PlatformMethodUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/platform-shipping-method`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSetMerchantsShippingMethods = async (dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/merchants-shipping-methods`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSetShippingMethod = async (dto: MethodUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/shipping-method`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartUnsetShippingMethod = async (id: string): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/shipping-method/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSetPlatformPaymentMethod = async (dto: PlatformMethodUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/platform-payment-method`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSetMerchantsPaymentMethods = async (dto: MerchantsMethodsUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/merchants-payment-methods`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSetCartCustomField = async (dto: SetCustomFieldDTO[]): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/custom-field`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSetCartAdditionalInfo = async (dto: OrderAdditionalInfoUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/additionalInfo`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartSync = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/sync`,
        method: 'POST',
        query: toQueryString(query),
    });
    return (response as unknown) as OrderDTO;
}

export const MyCartGetCrossSaleProducts = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }): Promise<ProductDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-cart/cross-sale-products`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ProductDTO[];
}

