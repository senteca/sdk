import { BaseAPI } from '../../runtime';
import { WalletDTO, WalletDraftDTO } from '../../models';

export class MyWalletAPI extends BaseAPI {
   async getByType (type: string): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/my-wallet/type=${encodeURIComponent(type)}`,
           method: 'GET',
        });
       return (response as unknown) as WalletDTO;
   }

   async request (dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/my-wallet/request`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as WalletDTO;
   }

   async add (dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/my-wallet/add`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as WalletDTO;
   }

}
