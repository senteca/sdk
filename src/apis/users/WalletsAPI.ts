import { BaseAPI } from '../../runtime';
import { WalletSearchResultDTO,WalletFilterResultDTO,WalletDraftDTO,WalletDTO,SetCustomFieldDTO } from '../../models';

export class WalletsAPI extends BaseAPI {
   async search (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<WalletSearchResultDTO> {
       const response = await this._request({
           path: `/users/wallets/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as WalletSearchResultDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<WalletFilterResultDTO> {
       const response = await this._request({
           path: `/users/wallets`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as WalletFilterResultDTO;
   }

   async create (dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/wallets`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as WalletDTO;
   }

   async getById (id: string): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/wallets/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as WalletDTO;
   }

   async update (id: string, dto: WalletDraftDTO): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/wallets/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as WalletDTO;
   }

   async delete (id: string): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/wallets/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as WalletDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<WalletDTO> {
       const response = await this._request({
           path: `/users/wallets/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as WalletDTO;
   }

   async import (dto: WalletDraftDTO[]): Promise<WalletDTO[]> {
       const response = await this._request({
           path: `/users/wallets/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as WalletDTO[];
   }

}
