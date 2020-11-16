import { BaseAPI } from '../../runtime';
import { StockLocationDTO } from '../../models/StockLocationDTO';
import { PickUpFromStoreStockLocationUpdateDTO } from '../../models/PickUpFromStoreStockLocationUpdateDTO';
import { OrderDTO } from '../../models/OrderDTO';

export class MyShippingsPickUpFromStoreAPI extends BaseAPI {
   async getMyStockLocations (): Promise<StockLocationDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/pick-up-from-store/stock-locations`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as StockLocationDTO[];
   }

   async setMyStockLocation (dto: PickUpFromStoreStockLocationUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/pick-up-from-store/stock-location`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as OrderDTO;
   }

}
