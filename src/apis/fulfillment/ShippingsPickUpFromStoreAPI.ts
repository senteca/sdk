import { BaseAPI } from '../../runtime';
import { StockLocationDTO } from '../../models/StockLocationDTO';
import { PickUpFromStoreStockLocationUpdateDTO } from '../../models/PickUpFromStoreStockLocationUpdateDTO';
import { OrderDTO } from '../../models/OrderDTO';

export class ShippingsPickUpFromStoreAPI extends BaseAPI {
   async getStockLocations (orderId: string, shippingId: string): Promise<StockLocationDTO[]> {
       const response = await this._request({
           path: `/fulfillment/shippings/pick-up-from-store/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/stock-locations`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as StockLocationDTO[];
   }

   async setStockLocation (orderId: string, shippingId: string, dto: PickUpFromStoreStockLocationUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/shippings/pick-up-from-store/orders/${encodeURIComponent(orderId)}/shippings/${encodeURIComponent(shippingId)}/stock-location`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

}
