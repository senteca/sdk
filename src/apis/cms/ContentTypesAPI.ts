import { BaseAPI } from '../../runtime';
import { ContentTypeDraftDTO } from '@models';
import { ContentTypeDTO } from '@models';
import { ContentTypeFilterResultDTO } from '@models';

export class ContentTypesAPI extends BaseAPI {
   async create (dto: ContentTypeDraftDTO): Promise<ContentTypeDTO> {
       const response = await this._request({
           path: `/cms/content-types`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as ContentTypeDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ContentTypeFilterResultDTO> {
       const response = await this._request({
           path: `/cms/content-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as ContentTypeFilterResultDTO;
   }

   async update (id: string, dto: ContentTypeDraftDTO): Promise<ContentTypeDTO> {
       const response = await this._request({
           path: `/cms/content-types/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as ContentTypeDTO;
   }

   async delete (id: string): Promise<ContentTypeDTO> {
       const response = await this._request({
           path: `/cms/content-types/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as ContentTypeDTO;
   }

}
