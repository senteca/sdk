import { BaseAPI } from '../../runtime';
import { WalletFilterResultDTO } from '../../models/WalletFilterResultDTO';
import { WalletDraftDTO } from '../../models/WalletDraftDTO';
import { WalletDTO } from '../../models/WalletDTO';
import { WalletSearchResultDTO } from '../../models/WalletSearchResultDTO';

export class WalletsAPI extends BaseAPI {
   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<WalletFilterResultDTO> {
       const response = await this._request({
           path: `/users/wallets`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as WalletFilterResultDTO;
   }

   async create (dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/wallets`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async getById (id: string): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/wallets/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async update (id: string, dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/wallets/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async delete (id: string): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/wallets/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as WalletDTO;
   }

   async search (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<WalletSearchResultDTO> {
       const response = await this._request({
           path: `/users/wallets/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as WalletSearchResultDTO;
   }

   async import (dto: string[]): Promise<WalletDTO[]> {
       const response = await this._request({
           path: `/users/wallets/import`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as WalletDTO[];
   }

}
