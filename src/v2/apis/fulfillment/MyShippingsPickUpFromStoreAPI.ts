/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { StockLocationDTO,PickUpFromStoreStockLocationUpdateDTO,OrderDTO } from '../../../models';

export const MyShippingsPickUpFromStoreGetMyStockLocations = async (): Promise<StockLocationDTO[]> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/pick-up-from-store/stock-locations`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as StockLocationDTO[];
}

export const MyShippingsPickUpFromStoreSetMyStockLocation = async (dto: PickUpFromStoreStockLocationUpdateDTO): Promise<OrderDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-shippings/pick-up-from-store/stock-location`,
        method: 'PATCH',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as OrderDTO;
}

