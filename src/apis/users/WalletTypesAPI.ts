import { BaseAPI } from '../../runtime';
import { WalletTypeDraftDTO } from '../../models/WalletTypeDraftDTO';
import { WalletTypeDTO } from '../../models/WalletTypeDTO';

export class WalletTypesAPI extends BaseAPI {
   async filterWalletTypes (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/users/wallet-types`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createWalletType (dto: WalletTypeDraftDTO): Promise<WalletTypeDTO> {
       const response = await this.request({
           path: `/users/wallet-types`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as WalletTypeDTO;
   }

   async findWalletTypeById (id: string): Promise<WalletTypeDTO> {
       const response = await this.request({
           path: `/users/wallet-types/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as WalletTypeDTO;
   }

   async updateWalletTypeById (id: string, dto: WalletTypeDraftDTO): Promise<WalletTypeDTO> {
       const response = await this.request({
           path: `/users/wallet-types/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as WalletTypeDTO;
   }

   async deleteWalletTypeById (id: string): Promise<WalletTypeDTO> {
       const response = await this.request({
           path: `/users/wallet-types/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as WalletTypeDTO;
   }

   async searchWalletTypes (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/users/wallet-types/search`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

}
