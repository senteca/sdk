import { BaseAPI } from '../../runtime';
import { AttributeDraftDTO } from '../../models/AttributeDraftDTO';
import { AttributeDTO } from '../../models/AttributeDTO';

export class AttributesAPI extends BaseAPI {
   async searchAttributes (query: { expand: string, language: string, term: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/attributes/search`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async filterAttributes (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/attributes`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createAttribute (dto: AttributeDraftDTO): Promise<AttributeDTO> {
       const response = await this.request({
           path: `/merchandise/attributes`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as AttributeDTO;
   }

   async findAttributeById (id: string): Promise<AttributeDTO> {
       const response = await this.request({
           path: `/merchandise/attributes/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as AttributeDTO;
   }

   async updateAttributeById (id: string, dto: AttributeDraftDTO): Promise<AttributeDTO> {
       const response = await this.request({
           path: `/merchandise/attributes/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as AttributeDTO;
   }

   async deleteAttributeById (id: string): Promise<AttributeDTO> {
       const response = await this.request({
           path: `/merchandise/attributes/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as AttributeDTO;
   }

   async importAttributes (dto: AttributeDraftDTO[]): Promise<AttributeDTO[]> {
       const response = await this.request({
           path: `/merchandise/attributes/import`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as AttributeDTO[];
   }

   async updateAttributeByName (name: string, dto: AttributeDraftDTO): Promise<AttributeDTO> {
       const response = await this.request({
           path: `/merchandise/attributes/name/${name}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as AttributeDTO;
   }

   async deleteAttributeByName (name: string): Promise<AttributeDTO> {
       const response = await this.request({
           path: `/merchandise/attributes/name/${name}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as AttributeDTO;
   }

}
