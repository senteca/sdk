import { BaseAPI } from '../../runtime';
import { ContentTypeDraftDTO } from '../../models/ContentTypeDraftDTO';
import { ContentTypeDTO } from '../../models/ContentTypeDTO';

export class ContentTypesAPI extends BaseAPI {
   async create (dto: ContentTypeDraftDTO): Promise<ContentTypeDTO> {
       const response = await this.request({
           path: `/cms/content-types`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as ContentTypeDTO;
   }

   async filter (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/cms/content-types`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async update (id: string, dto: ContentTypeDraftDTO): Promise<ContentTypeDTO> {
       const response = await this.request({
           path: `/cms/content-types/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ContentTypeDTO;
   }

   async delete (id: string): Promise<ContentTypeDTO> {
       const response = await this.request({
           path: `/cms/content-types/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as ContentTypeDTO;
   }

}
