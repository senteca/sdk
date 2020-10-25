import { BaseAPI } from '../../runtime';
import { SynonymDraftDTO } from '../../models/SynonymDraftDTO';
import { SynonymDTO } from '../../models/SynonymDTO';
import { SynonymFilterResultDTO } from '../../models/SynonymFilterResultDTO';

export class CatalogAPI extends BaseAPI {
   async search (query: { priceRanges?: string[], discountRanges?: string[], preFilters?: string[], postFilters?: string[], showCount?: boolean, skipSingleAttributes?: boolean, onlyResults?: boolean, language: string, priceList: string, merchant: string, sort?: string[], limit?: number, offset?: number, categoriesParent: string, brandsParent: string, fuzziness?: string, prefixLength?: number, maxExpansions?: number }): Promise<object[]> {
       const response = await this._request({
           path: `/merchandise/catalog/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as object[];
   }

   async suggest (query: { language: string, priceList: string, text: string, merchant?: string, fuzziness?: string, prefixLength?: number, maxExpansions?: number, maxProductResults?: number, maxCategoryResults?: number, maxBrandsResults?: number }): Promise<object[]> {
       const response = await this._request({
           path: `/merchandise/catalog/suggest`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as object[];
   }

   async sync (): Promise<void> {
       const response = await this._request({
           path: `/merchandise/catalog/sync`,
           method: 'POST',
           
           
           
        });
       return (response.json() as unknown) as void;
   }

   async syncFrom (from: number): Promise<void> {
       const response = await this._request({
           path: `/merchandise/catalog/sync/from=${from}`,
           method: 'POST',
           
           
           
        });
       return (response.json() as unknown) as void;
   }

   async createSynonym (dto: SynonymDraftDTO): Promise<SynonymDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as SynonymDTO;
   }

   async filterSynonyms (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<SynonymFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as SynonymFilterResultDTO;
   }

   async updateSynonym (id: string, dto: SynonymDraftDTO): Promise<SynonymDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as SynonymDTO;
   }

   async deleteSynonym (id: string): Promise<SynonymDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as SynonymDTO;
   }

   async syncSynonyms (): Promise<void> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms/sync`,
           method: 'POST',
           
           
           
        });
       return (response.json() as unknown) as void;
   }

}
