import { BaseAPI } from '../../runtime';
import { StockLocationDTO } from '@models';
import { PickUpFromStoreStockLocationUpdateDTO } from '@models';
import { OrderDTO } from '@models';

export class MyShippingsPickUpFromStoreAPI extends BaseAPI {
   async getMyStockLocations (): Promise<StockLocationDTO[]> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/pick-up-from-store/stock-locations`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as StockLocationDTO[];
   }

   async setMyStockLocation (dto: PickUpFromStoreStockLocationUpdateDTO): Promise<OrderDTO> {
       const response = await this._request({
           path: `/fulfillment/my-shippings/pick-up-from-store/stock-location`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as OrderDTO;
   }

}
