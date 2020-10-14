import { BaseAPI } from '../../runtime';
import { WalletDTO } from '../../models/WalletDTO';
import { WalletDraftDTO } from '../../models/WalletDraftDTO';

export class MyWalletAPI extends BaseAPI {
   async getMyWalletByType (type: string): Promise<WalletDTO> {
       const response = await this.request({
           path: `/users/my-wallet/type=${type}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async requestMyWallet (dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this.request({
           path: `/users/my-wallet/request`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async addMyWallet (dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this.request({
           path: `/users/my-wallet/add`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

}
