import { BaseAPI } from '../../runtime';
import { TagDraftDTO } from '../../models/TagDraftDTO';
import { TagDTO } from '../../models/TagDTO';

export class TagsAPI extends BaseAPI {
   async create (dto: TagDraftDTO): Promise<TagDTO> {
       const response = await this.request({
           path: `/cms/tags`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as TagDTO;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/cms/tags`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async update (id: string, dto: TagDraftDTO): Promise<TagDTO> {
       const response = await this.request({
           path: `/cms/tags/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as TagDTO;
   }

   async delete (id: string): Promise<TagDTO> {
       const response = await this.request({
           path: `/cms/tags/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as TagDTO;
   }

}
