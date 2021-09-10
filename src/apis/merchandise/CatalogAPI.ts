import { BaseAPI } from '../../runtime';
import { CatalogFilterResultDTO, CatalogSearchResultDTO, CatalogAggregateResponseDTO, CustomSortDraftDTO, CustomSortDTO, CustomSortFilterResultDTO, SynonymDraftDTO, SynonymDTO, SynonymFilterResultDTO } from '../../models';

export class CatalogAPI extends BaseAPI {
   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, postFilter?: string, fuzzy?: boolean, fuzzyLevel?: string, count?: boolean, limit?: number, offset?: number, sort?: string, secondarySort?: string, geographicalCoordinates?: string, collapseMode?: string }): Promise<CatalogFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/filter`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CatalogFilterResultDTO;
   }

   async search (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, text: string, fuzzy?: boolean, fuzzyLevel?: string, includeProducts?: boolean, includeBrands?: boolean, includeCategories?: boolean, limit?: number }): Promise<CatalogSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CatalogSearchResultDTO;
   }

   async aggregate (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, postFilter?: string, fuzzy?: boolean, fuzzyLevel?: string, count?: boolean, unfilterSelected?: boolean, terms: string, ranges: string, stats: string, collapseMode?: string }): Promise<CatalogAggregateResponseDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/aggregate`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CatalogAggregateResponseDTO;
   }

   async createCustomSort (dto: CustomSortDraftDTO): Promise<CustomSortDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/custom-sorts`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomSortDTO;
   }

   async filterCustomSorts (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<CustomSortFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/custom-sorts`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as CustomSortFilterResultDTO;
   }

   async getCustomSortById (id: string): Promise<CustomSortDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/custom-sorts/${encodeURIComponent(id)}`,
           method: 'GET',
        });
       return (response as unknown) as CustomSortDTO;
   }

   async updateCustomSortById (id: string, dto: CustomSortDraftDTO): Promise<CustomSortDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/custom-sorts/${encodeURIComponent(id)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as CustomSortDTO;
   }

   async deleteCustomSortById (id: string): Promise<CustomSortDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/custom-sorts/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as CustomSortDTO;
   }

   async createSynonym (dto: SynonymDraftDTO): Promise<SynonymDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as SynonymDTO;
   }

   async filterSynonyms (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<SynonymFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as SynonymFilterResultDTO;
   }

   async updateSynonym (synonymId: string, dto: SynonymDraftDTO): Promise<SynonymDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms/${encodeURIComponent(synonymId)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as SynonymDTO;
   }

   async deleteSynonym (id: string): Promise<SynonymDTO> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as SynonymDTO;
   }

   async syncSynonyms (): Promise<void> {
       const response = await this._request({
           path: `/merchandise/catalog/synonyms/sync`,
           method: 'POST',
        });
       
   }

}
