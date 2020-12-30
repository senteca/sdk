import { BaseAPI } from '../../runtime';
import { MediaFilterResultDTO } from '../../models/MediaFilterResultDTO';
import { MediaDeleteDTO } from '../../models/MediaDeleteDTO';

export class MediaAPI extends BaseAPI {
   async uploadAssets (folderId: string, dto: any): Promise<void> {
       const response = await this._request({
           path: `/cms/media/${encodeURIComponent(folderId)}`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'multipart/form-data',
        });
       
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<MediaFilterResultDTO> {
       const response = await this._request({
           path: `/cms/media`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as MediaFilterResultDTO;
   }

   async delete (dto: MediaDeleteDTO): Promise<any> {
       const response = await this._request({
           path: `/cms/media`,
           method: 'DELETE',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as any;
   }

}
