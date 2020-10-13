import { BaseAPI } from '../../runtime';

export class MediaAPI extends BaseAPI {
   async uploadAssets (folderId: string): Promise<void> {
       const response = await this.request({
           path: `/cms/media/${folderId}`,
           method: 'POST',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async filter (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/cms/media`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async deleteMedia (): Promise<object> {
       const response = await this.request({
           path: `/cms/media`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as object;
   }

}
