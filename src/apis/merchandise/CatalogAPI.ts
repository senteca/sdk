import { BaseAPI } from '../../runtime';
import { CatalogFilterResultDTO } from '../../models/CatalogFilterResultDTO';
import { CatalogSearchResultDTO } from '../../models/CatalogSearchResultDTO';
import { CatalogAggregateResponseDTO } from '../../models/CatalogAggregateResponseDTO';
import { CustomSortDraftDTO } from '../../models/CustomSortDraftDTO';
import { CustomSortDTO } from '../../models/CustomSortDTO';
import { CustomSortFilterResultDTO } from '../../models/CustomSortFilterResultDTO';
import { SynonymDraftDTO } from '../../models/SynonymDraftDTO';
import { SynonymDTO } from '../../models/SynonymDTO';
import { SynonymFilterResultDTO } from '../../models/SynonymFilterResultDTO';

export class CatalogAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, postFilter?: string, fuzzy?: boolean, fuzzyLevel?: string, count?: boolean, limit?: number, offset?: number, sort?: string }): Promise<CatalogFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/filter`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CatalogFilterResultDTO;
   }

   async search (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, text: string, fuzzy?: boolean, fuzzyLevel?: string, includeProducts?: boolean, includeBrands?: boolean, includeCategories?: boolean, limit?: number }): Promise<CatalogSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CatalogSearchResultDTO;
   }

   async aggregate (query: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, postFilter?: string, fuzzy?: boolean, fuzzyLevel?: string, count?: boolean, unfilterSelected?: boolean, terms: string, ranges: string, stats: string }): Promise<CatalogAggregateResponseDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/aggregate`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CatalogAggregateResponseDTO;
   }

   async createCustomSort (dto: CustomSortDraftDTO): Promise<CustomSortDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/custom-sorts`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomSortDTO;
   }

   async filterCustomSorts (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomSortFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/custom-sorts`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as CustomSortFilterResultDTO;
   }

   async updateCustomSort (id: string, dto: CustomSortDraftDTO): Promise<CustomSortDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/custom-sorts/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as CustomSortDTO;
   }

   async deleteCustomSortById (id: string): Promise<CustomSortDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/custom-sorts/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as CustomSortDTO;
   }

   async createSynonym (dto: SynonymDraftDTO): Promise<SynonymDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SynonymDTO;
   }

   async filterSynonyms (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<SynonymFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as SynonymFilterResultDTO;
   }

   async updateSynonym (synonymId: string, dto: SynonymDraftDTO): Promise<SynonymDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms/${encodeURIComponent(synonymId)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as SynonymDTO;
   }

   async deleteSynonym (id: string): Promise<SynonymDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as SynonymDTO;
   }

   async syncSynonyms (): Promise<void> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms/sync`,
           method: 'POST',
           
           
           
           
        });
       
   }

}
