/* tslint:disable */
/* eslint-disable */
/**
 * Auth
 * Auth API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface SearchCatalogRequest {
    preFilters: Array<string>;
    postFilters: Array<string>;
    language: string;
    priceList: string;
    merchant: string;
    sort: Array<SearchCatalogSortEnum>;
    limit: number;
    offset: number;
    categoriesParent: string;
    brandsParent: string;
    priceRanges?: Array<string>;
    discountRanges?: Array<string>;
    showCount?: boolean;
    skipSingleAttributes?: boolean;
    onlyResults?: boolean;
    fuzziness?: string;
    prefixLength?: number;
    maxExpansions?: number;
}

export interface SuggestRequest {
    language: string;
    priceList: string;
    text: string;
    merchant?: string;
    fuzziness?: string;
    prefixLength?: number;
    maxExpansions?: number;
    maxProductResults?: number;
    maxCategoryResults?: number;
    maxBrandsResults?: number;
}

export interface SyncCatalogFromRequest {
    from: number;
}

/**
 * 
 */
export class CatalogApi extends runtime.BaseAPI {

    /**
     * Searches in catalog by search term.
     */
    async searchCatalogRaw(requestParameters: SearchCatalogRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.preFilters === null || requestParameters.preFilters === undefined) {
            throw new runtime.RequiredError('preFilters','Required parameter requestParameters.preFilters was null or undefined when calling searchCatalog.');
        }

        if (requestParameters.postFilters === null || requestParameters.postFilters === undefined) {
            throw new runtime.RequiredError('postFilters','Required parameter requestParameters.postFilters was null or undefined when calling searchCatalog.');
        }

        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling searchCatalog.');
        }

        if (requestParameters.priceList === null || requestParameters.priceList === undefined) {
            throw new runtime.RequiredError('priceList','Required parameter requestParameters.priceList was null or undefined when calling searchCatalog.');
        }

        if (requestParameters.merchant === null || requestParameters.merchant === undefined) {
            throw new runtime.RequiredError('merchant','Required parameter requestParameters.merchant was null or undefined when calling searchCatalog.');
        }

        if (requestParameters.sort === null || requestParameters.sort === undefined) {
            throw new runtime.RequiredError('sort','Required parameter requestParameters.sort was null or undefined when calling searchCatalog.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling searchCatalog.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling searchCatalog.');
        }

        if (requestParameters.categoriesParent === null || requestParameters.categoriesParent === undefined) {
            throw new runtime.RequiredError('categoriesParent','Required parameter requestParameters.categoriesParent was null or undefined when calling searchCatalog.');
        }

        if (requestParameters.brandsParent === null || requestParameters.brandsParent === undefined) {
            throw new runtime.RequiredError('brandsParent','Required parameter requestParameters.brandsParent was null or undefined when calling searchCatalog.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.priceRanges) {
            queryParameters['priceRanges'] = requestParameters.priceRanges;
        }

        if (requestParameters.discountRanges) {
            queryParameters['discountRanges'] = requestParameters.discountRanges;
        }

        if (requestParameters.preFilters) {
            queryParameters['preFilters'] = requestParameters.preFilters;
        }

        if (requestParameters.postFilters) {
            queryParameters['postFilters'] = requestParameters.postFilters;
        }

        if (requestParameters.showCount !== undefined) {
            queryParameters['showCount'] = requestParameters.showCount;
        }

        if (requestParameters.skipSingleAttributes !== undefined) {
            queryParameters['skipSingleAttributes'] = requestParameters.skipSingleAttributes;
        }

        if (requestParameters.onlyResults !== undefined) {
            queryParameters['onlyResults'] = requestParameters.onlyResults;
        }

        if (requestParameters.language !== undefined) {
            queryParameters['language'] = requestParameters.language;
        }

        if (requestParameters.priceList !== undefined) {
            queryParameters['priceList'] = requestParameters.priceList;
        }

        if (requestParameters.merchant !== undefined) {
            queryParameters['merchant'] = requestParameters.merchant;
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.categoriesParent !== undefined) {
            queryParameters['categoriesParent'] = requestParameters.categoriesParent;
        }

        if (requestParameters.brandsParent !== undefined) {
            queryParameters['brandsParent'] = requestParameters.brandsParent;
        }

        if (requestParameters.fuzziness !== undefined) {
            queryParameters['fuzziness'] = requestParameters.fuzziness;
        }

        if (requestParameters.prefixLength !== undefined) {
            queryParameters['prefixLength'] = requestParameters.prefixLength;
        }

        if (requestParameters.maxExpansions !== undefined) {
            queryParameters['maxExpansions'] = requestParameters.maxExpansions;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/catalog/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Searches in catalog by search term.
     */
    async searchCatalog(requestParameters: SearchCatalogRequest): Promise<Array<object>> {
        const response = await this.searchCatalogRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns suggestions by search term. Used for search autocompletion.
     */
    async suggestRaw(requestParameters: SuggestRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling suggest.');
        }

        if (requestParameters.priceList === null || requestParameters.priceList === undefined) {
            throw new runtime.RequiredError('priceList','Required parameter requestParameters.priceList was null or undefined when calling suggest.');
        }

        if (requestParameters.text === null || requestParameters.text === undefined) {
            throw new runtime.RequiredError('text','Required parameter requestParameters.text was null or undefined when calling suggest.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.language !== undefined) {
            queryParameters['language'] = requestParameters.language;
        }

        if (requestParameters.priceList !== undefined) {
            queryParameters['priceList'] = requestParameters.priceList;
        }

        if (requestParameters.text !== undefined) {
            queryParameters['text'] = requestParameters.text;
        }

        if (requestParameters.merchant !== undefined) {
            queryParameters['merchant'] = requestParameters.merchant;
        }

        if (requestParameters.fuzziness !== undefined) {
            queryParameters['fuzziness'] = requestParameters.fuzziness;
        }

        if (requestParameters.prefixLength !== undefined) {
            queryParameters['prefixLength'] = requestParameters.prefixLength;
        }

        if (requestParameters.maxExpansions !== undefined) {
            queryParameters['maxExpansions'] = requestParameters.maxExpansions;
        }

        if (requestParameters.maxProductResults !== undefined) {
            queryParameters['maxProductResults'] = requestParameters.maxProductResults;
        }

        if (requestParameters.maxCategoryResults !== undefined) {
            queryParameters['maxCategoryResults'] = requestParameters.maxCategoryResults;
        }

        if (requestParameters.maxBrandsResults !== undefined) {
            queryParameters['maxBrandsResults'] = requestParameters.maxBrandsResults;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/catalog/suggest`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns suggestions by search term. Used for search autocompletion.
     */
    async suggest(requestParameters: SuggestRequest): Promise<Array<object>> {
        const response = await this.suggestRaw(requestParameters);
        return await response.value();
    }

    /**
     * Syncs catalog database and elastic search indexes.
     */
    async syncRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/catalog/sync`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Syncs catalog database and elastic search indexes.
     */
    async sync(): Promise<void> {
        await this.syncRaw();
    }

    /**
     * Syncs catalog changes since a particular date between database and elastic search indexes.
     */
    async syncCatalogFromRaw(requestParameters: SyncCatalogFromRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.from === null || requestParameters.from === undefined) {
            throw new runtime.RequiredError('from','Required parameter requestParameters.from was null or undefined when calling syncCatalogFrom.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/merchandise/catalog/sync/{from}`.replace(`{${"from"}}`, encodeURIComponent(String(requestParameters.from))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Syncs catalog changes since a particular date between database and elastic search indexes.
     */
    async syncCatalogFrom(requestParameters: SyncCatalogFromRequest): Promise<void> {
        await this.syncCatalogFromRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum SearchCatalogSortEnum {
    PriceAsc = 'price-asc',
    PriceDesc = 'price-desc',
    DiscountAsc = 'discount-asc',
    DiscountDesc = 'discount-desc',
    WeightAsc = 'weight-asc',
    WeightDesc = 'weight-desc',
    InventoryAsc = 'inventory-asc',
    InventoryDesc = 'inventory-desc',
    ImagesAsc = 'images-asc',
    ImagesDesc = 'images-desc'
}
