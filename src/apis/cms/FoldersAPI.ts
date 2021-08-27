import { BaseAPI } from '../../runtime';
import { FolderDraftDTO, FolderDTO, FolderFilterResultDTO, FlipFoldersDTO } from '../../models';

export class FoldersAPI extends BaseAPI {
   async create (dto: FolderDraftDTO): Promise<FolderDTO> {
       const response = await this._request({
           path: `/cms/folders`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as FolderDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<FolderFilterResultDTO> {
       const response = await this._request({
           path: `/cms/folders`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as FolderFilterResultDTO;
   }

   async update (id: string, dto: FolderDraftDTO): Promise<FolderDTO> {
       const response = await this._request({
           path: `/cms/folders/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as FolderDTO;
   }

   async delete (id: string): Promise<FolderDTO> {
       const response = await this._request({
           path: `/cms/folders/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as FolderDTO;
   }

   async flip (dto: FlipFoldersDTO): Promise<void> {
       const response = await this._request({
           path: `/cms/folders/flip`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

}
