/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { StockLocationDTO, PickUpFromStoreStockLocationUpdateDTO, OrderDTO } from '../../../models';

export const ShippingsPickUpFromStoreGetStockLocations = async (orderId: string, shippingId: string): Promise<StockLocationDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/pick-up-from-store/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/stock-locations`,
        method: 'GET',
    });
    return (response as unknown) as StockLocationDTO[];
}

export const ShippingsPickUpFromStoreSetStockLocation = async (orderId: string, shippingId: string, dto: PickUpFromStoreStockLocationUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/shippings/pick-up-from-store/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/stock-location`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

