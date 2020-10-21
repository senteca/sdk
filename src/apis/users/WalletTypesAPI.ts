import { BaseAPI } from '../../runtime';
import { WalletTypeFilterResultDTO } from '../../models/WalletTypeFilterResultDTO';
import { WalletTypeDraftDTO } from '../../models/WalletTypeDraftDTO';
import { WalletTypeDTO } from '../../models/WalletTypeDTO';
import { WalletTypeSearchResultDTO } from '../../models/WalletTypeSearchResultDTO';

export class WalletTypesAPI extends BaseAPI {
   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<WalletTypeFilterResultDTO> {
       const response = await this._request({
           path: `/users/wallet-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as WalletTypeFilterResultDTO;
   }

   async create (dto: WalletTypeDraftDTO): Promise<WalletTypeDTO> {
       const response = await this._request({
           path: `/users/wallet-types`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as WalletTypeDTO;
   }

   async getById (id: string): Promise<WalletTypeDTO> {
       const response = await this._request({
           path: `/users/wallet-types/${id}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as WalletTypeDTO;
   }

   async update (id: string, dto: WalletTypeDraftDTO): Promise<WalletTypeDTO> {
       const response = await this._request({
           path: `/users/wallet-types/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as WalletTypeDTO;
   }

   async delete (id: string): Promise<WalletTypeDTO> {
       const response = await this._request({
           path: `/users/wallet-types/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as WalletTypeDTO;
   }

   async search (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<WalletTypeSearchResultDTO> {
       const response = await this._request({
           path: `/users/wallet-types/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as WalletTypeSearchResultDTO;
   }

}
