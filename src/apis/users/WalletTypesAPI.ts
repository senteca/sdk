import { BaseAPI } from '../../runtime';
import { WalletTypeFilterResultDTO,WalletTypeDraftDTO,WalletTypeDTO,WalletTypeSearchResultDTO } from '../../models';

export class WalletTypesAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<WalletTypeFilterResultDTO> {
       const response = await this._request({
           path: `/users/wallet-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as WalletTypeFilterResultDTO;
   }

   async create (dto: WalletTypeDraftDTO): Promise<WalletTypeDTO> {
       const response = await this._request({
           path: `/users/wallet-types`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as WalletTypeDTO;
   }

   async search (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<WalletTypeSearchResultDTO> {
       const response = await this._request({
           path: `/users/wallet-types/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as WalletTypeSearchResultDTO;
   }

   async getByKey (key: string): Promise<WalletTypeDTO> {
       const response = await this._request({
           path: `/users/wallet-types/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as WalletTypeDTO;
   }

   async getById (id: string): Promise<WalletTypeDTO> {
       const response = await this._request({
           path: `/users/wallet-types/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as WalletTypeDTO;
   }

   async update (id: string, dto: WalletTypeDraftDTO): Promise<WalletTypeDTO> {
       const response = await this._request({
           path: `/users/wallet-types/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as WalletTypeDTO;
   }

   async delete (id: string): Promise<WalletTypeDTO> {
       const response = await this._request({
           path: `/users/wallet-types/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as WalletTypeDTO;
   }

}
