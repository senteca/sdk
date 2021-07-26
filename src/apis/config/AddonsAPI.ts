import { BaseAPI } from '../../runtime';
import { AddonFilterResultDTO } from '../../models/AddonFilterResultDTO';
import { AddonDraftDTO } from '../../models/AddonDraftDTO';
import { AddonDTO } from '../../models/AddonDTO';
import { AddonRequestDTO } from '../../models/AddonRequestDTO';

export class AddonsAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<AddonFilterResultDTO> {
       const response = await this._request({
           path: `/config/addons`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as AddonFilterResultDTO;
   }

   async register (dto: AddonDraftDTO): Promise<AddonDTO> {
       const response = await this._request({
           path: `/config/addons`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as AddonDTO;
   }

   async bulkRegister (dto: AddonDraftDTO[]): Promise<AddonDraftDTO[]> {
       const response = await this._request({
           path: `/config/addons/bulk-register`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as AddonDraftDTO[];
   }

   async request (dto: AddonRequestDTO): Promise<void> {
       const response = await this._request({
           path: `/config/addons/request`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

}
