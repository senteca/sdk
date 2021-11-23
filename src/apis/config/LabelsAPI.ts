import { BaseAPI } from '../../runtime';
import { LabelDraftDTO, LabelDTO, LabelFilterResultDTO } from '../../models';

export class LabelsAPI extends BaseAPI {
   async create (dto: LabelDraftDTO): Promise<LabelDTO> {
       const response = await this._request({
           path: `/config/labels`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as LabelDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<LabelFilterResultDTO> {
       const response = await this._request({
           path: `/config/labels`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as LabelFilterResultDTO;
   }

   async getById (id: string): Promise<LabelDTO> {
       const response = await this._request({
           path: `/config/labels/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as LabelDTO;
   }

   async updateById (id: string, dto: LabelDraftDTO): Promise<LabelDTO> {
       const response = await this._request({
           path: `/config/labels/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as LabelDTO;
   }

   async deleteById (id: string): Promise<LabelDTO> {
       const response = await this._request({
           path: `/config/labels/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as LabelDTO;
   }

}
