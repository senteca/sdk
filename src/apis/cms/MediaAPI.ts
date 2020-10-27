import { BaseAPI } from '../../runtime';
import { MediaFilterResultDTO } from '../../models/MediaFilterResultDTO';

export class MediaAPI extends BaseAPI {
   async uploadAssets (folderId: string): Promise<void> {
       const response = await this._request({
           path: `/cms/media/${encodeURIComponent(folderId)}`,
           method: 'POST',
           
           
           
        });
       return (response.json() as unknown) as void;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<MediaFilterResultDTO> {
       const response = await this._request({
           path: `/cms/media`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as MediaFilterResultDTO;
   }

   async delete (): Promise<object> {
       const response = await this._request({
           path: `/cms/media`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

}
