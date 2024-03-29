import { BaseAPI } from '../../runtime';
import { MediaDTO, MediaFilterResultDTO, MediaDeleteDTO } from '../../models';

export class MediaAPI extends BaseAPI {
   async uploadAssets (folderId: string, dto: any): Promise<MediaDTO[]> {
       const response = await this._request({
           path: `/cms/media/${encodeURIComponent(folderId)}`,
           method: 'POST',
           body: dto,
           contentType: 'multipart/form-data',
        });
       return (response as unknown) as MediaDTO[];
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<MediaFilterResultDTO> {
       const response = await this._request({
           path: `/cms/media`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as MediaFilterResultDTO;
   }

   async delete (dto: MediaDeleteDTO): Promise<any> {
       const response = await this._request({
           path: `/cms/media`,
           method: 'DELETE',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as any;
   }

}
