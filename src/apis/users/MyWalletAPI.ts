import { BaseAPI } from '../../runtime';
import { WalletDTO } from '../../models/WalletDTO';
import { WalletDraftDTO } from '../../models/WalletDraftDTO';

export class MyWalletAPI extends BaseAPI {
   async getByType (type: string): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/my-wallet/type=${encodeURIComponent(type)}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async request (dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/my-wallet/request`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async add (dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/my-wallet/add`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

}
