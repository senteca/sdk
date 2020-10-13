import { BaseAPI } from '../../runtime';
import { WalletDraftDTO } from '../../models/WalletDraftDTO';
import { WalletDTO } from '../../models/WalletDTO';

export class WalletsAPI extends BaseAPI {
   async filterWallets (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/users/wallets`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createWallet (dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this.request({
           path: `/users/wallets`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async findWalletById (id: string): Promise<WalletDTO> {
       const response = await this.request({
           path: `/users/wallets/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async updateWalletById (id: string, dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this.request({
           path: `/users/wallets/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async deleteWalletById (id: string): Promise<WalletDTO> {
       const response = await this.request({
           path: `/users/wallets/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async searchWallets (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/users/wallets/search`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async importWallets (dto: string[]): Promise<WalletDTO[]> {
       const response = await this.request({
           path: `/users/wallets/import`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as WalletDTO[];
   }

}
