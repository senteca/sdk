import { BaseAPI } from '../../runtime';
import { PriceListDraftDTO } from '../../models/PriceListDraftDTO';
import { PriceListDTO } from '../../models/PriceListDTO';

export class PriceListsAPI extends BaseAPI {
   async createPriceList (dto: PriceListDraftDTO): Promise<PriceListDTO> {
       const response = await this.request({
           path: `/merchandise/price-lists`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as PriceListDTO;
   }

   async filterPriceLists (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/price-lists`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async findPriceListById (id: string): Promise<PriceListDTO> {
       const response = await this.request({
           path: `/merchandise/price-lists/${id}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as PriceListDTO;
   }

   async updatePriceListById (id: string, dto: PriceListDraftDTO): Promise<PriceListDTO> {
       const response = await this.request({
           path: `/merchandise/price-lists/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as PriceListDTO;
   }

   async deletePriceListById (id: string): Promise<PriceListDTO> {
       const response = await this.request({
           path: `/merchandise/price-lists/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as PriceListDTO;
   }

   async findPriceListByKey (key: string): Promise<PriceListDTO> {
       const response = await this.request({
           path: `/merchandise/price-lists/key/${key}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as PriceListDTO;
   }

}
