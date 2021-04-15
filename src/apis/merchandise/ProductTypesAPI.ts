import { BaseAPI } from '../../runtime';
import { ProductTypeDraftDTO } from '../../models/ProductTypeDraftDTO';
import { ProductTypeDTO } from '../../models/ProductTypeDTO';
import { ProductTypeFilterResultDTO } from '../../models/ProductTypeFilterResultDTO';

export class ProductTypesAPI extends BaseAPI {
   async create (dto: ProductTypeDraftDTO): Promise<ProductTypeDTO> {
       const response = await this._request({
           path: `/merchandise/product-types`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as ProductTypeDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ProductTypeFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/product-types`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response as unknown) as ProductTypeFilterResultDTO;
   }

   async getByKey (key: string): Promise<ProductTypeDTO> {
       const response = await this._request({
           path: `/merchandise/product-types/key=${encodeURIComponent(key)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as ProductTypeDTO;
   }

   async getById (id: string): Promise<ProductTypeDTO> {
       const response = await this._request({
           path: `/merchandise/product-types/${encodeURIComponent(id)}`,
           method: 'GET',
           
           
           
           
        });
       return (response as unknown) as ProductTypeDTO;
   }

   async updateById (id: string, dto: ProductTypeDraftDTO): Promise<ProductTypeDTO> {
       const response = await this._request({
           path: `/merchandise/product-types/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response as unknown) as ProductTypeDTO;
   }

   async deleteById (id: string): Promise<ProductTypeDTO> {
       const response = await this._request({
           path: `/merchandise/product-types/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response as unknown) as ProductTypeDTO;
   }

}
