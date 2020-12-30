import { BaseAPI } from '../../runtime';
import { ProductTypeDraftDTO } from '../../models/ProductTypeDraftDTO';
import { ProductType } from '../../models/ProductType';
import { ProductTypeFilterResultDTO } from '../../models/ProductTypeFilterResultDTO';

export class ProductTypesAPI extends BaseAPI {
   async create (dto: ProductTypeDraftDTO): Promise<ProductType> {
       const response = await this._request({
           path: `/merchandise/product-types`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductType;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<ProductTypeFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/product-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ProductTypeFilterResultDTO;
   }

   async getById (id: string): Promise<ProductType> {
       const response = await this._request({
           path: `/merchandise/product-types/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ProductType;
   }

   async update (id: string, dto: ProductTypeDraftDTO): Promise<ProductType> {
       const response = await this._request({
           path: `/merchandise/product-types/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductType;
   }

   async delete (id: string): Promise<ProductType> {
       const response = await this._request({
           path: `/merchandise/product-types/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ProductType;
   }

}
