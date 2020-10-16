import { BaseAPI } from '../../runtime';
import { WishListDraftDTO } from '../../models/WishListDraftDTO';
import { WishListDTO } from '../../models/WishListDTO';

export class MyWishListAPI extends BaseAPI {
   async create (dto: WishListDraftDTO): Promise<WishListDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as WishListDTO;
   }

   async get (): Promise<WishListDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as WishListDTO;
   }

   async addProduct (id: string): Promise<WishListDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list/products/${id}`,
           method: 'POST',
           
           
           
        });
       return (response.json() as unknown) as WishListDTO;
   }

   async deleteProduct (id: string): Promise<WishListDTO> {
       const response = await this._request({
           path: `/fulfillment/my-wish-list/products/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as WishListDTO;
   }

}
