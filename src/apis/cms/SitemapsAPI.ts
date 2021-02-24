import { BaseAPI } from '../../runtime';

export class SitemapsAPI extends BaseAPI {
   async getSitemapFiles (storeKey: string, interfaceKey: string): Promise<string[]> {
       const response = await this._request({
           path: `/cms/sitemaps/storeKey=${encodeURIComponent(storeKey)}/interfaceKey=${encodeURIComponent(interfaceKey)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as string[];
   }

}
