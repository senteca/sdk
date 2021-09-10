/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { BulkLinkUpdateDTO, BulkDeleteDTO, BulkStatusChangeDTO, BulkStateChangeDTO, BulkCustomFieldUpdateDTO, BulkCustomFieldUpdateByFilterDTO, BulkAttributeUpdateDTO, BulkAttributeDeleteDTO, BulkOfferQuantityUpdateDTO, BulkLabelSetDTO, BulkLabelRemoveDTO, ProductDraftDTO, ProductDTO, ProductFilterResultDTO, ProductImportDraftDTO, FilterQueryDTO, ProductSearchResultDTO, AttributeValueDTO, ProductUpdateDTO, SetCustomFieldDTO, AssetDTO, StoreStatusDTO, TransitionProductStateDTO, KeyReferenceDTO, ReviewRatingStatisticsDTO, LangValue, ProductScoreUpdateDTO, ProductOwnerUpdateDTO, IdReferenceDTO, ProductRelationsDTO, ProductAttributeDTO, ProductMasterVariantUpdateDTO, ContentDTO, ProductSkuUpdateDTO, ImageDTO, SwapIndexDTO, ProductVariantDraftDTO, ProductBarcodeUpdateDTO, ProductCollapseKeyUpdateDTO, ProductCollapseModeUpdateDTO, ProductAttributeDraftDTO, OfferDraftDTO, ProductAliasImagesFromUpdateDTO, ShippingDataDTO, ProductVariantOverridesDTO, OptionDefinitionDTO, InventoryDraftDTO, ProductVariantLabelDTO } from '../../../models';

export const ProductsBulkLink = async (dto: BulkLinkUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/link`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkUnlink = async (dto: BulkLinkUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/unlink`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkDelete = async (dto: BulkDeleteDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/delete`,
        method: 'DELETE',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkSetStatus = async (dto: BulkStatusChangeDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/status`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkSetState = async (dto: BulkStateChangeDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/state`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkCustomFieldUpdate = async (dto: BulkCustomFieldUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/custom`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkCustomFieldUpdateByFilter = async (dto: BulkCustomFieldUpdateByFilterDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/custom-by-filter`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkAttributeSet = async (dto: BulkAttributeUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/attribute-set`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkAttributeDelete = async (dto: BulkAttributeDeleteDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/attribute-delete`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkOfferMinQuantity = async (dto: BulkOfferQuantityUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/offer-min-quantity`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkOfferMaxQuantity = async (dto: BulkOfferQuantityUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/offer-max-quantity`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkLabelSet = async (dto: BulkLabelSetDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/label-set`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsBulkLabelDelete = async (dto: BulkLabelRemoveDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/bulk/label-remove`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsCreate = async (dto: ProductDraftDTO): Promise<ProductDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ProductDTO;
}

export const ProductsFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ProductFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ProductFilterResultDTO;
}

export const ProductsCreateNoValidation = async (dto: ProductDraftDTO): Promise<ProductDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/no-validation`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ProductDTO;
}

export const ProductsImport = async (dto: ProductImportDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/import`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsExportToCSV = async (dto: FilterQueryDTO): Promise<any> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/export/csv`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as any;
}

export const ProductsSearch = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<ProductSearchResultDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/search`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ProductSearchResultDTO;
}

export const ProductsGetBySlug = async (slug: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, stockLocationKey?: string }): Promise<ProductDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/slug=${encodeURIComponent(slug)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ProductDTO;
}

export const ProductsGetByExternalId = async (externalId: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, stockLocationKey?: string }): Promise<ProductDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/externalId=${encodeURIComponent(externalId)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ProductDTO;
}

export const ProductsDeleteByExternalId = async (externalId: string): Promise<ProductDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/externalId=${encodeURIComponent(externalId)}`,
        method: 'DELETE',
    });
    return (response as unknown) as ProductDTO;
}

export const ProductsGetAttributeLabel = async (selector: string, value: string): Promise<AttributeValueDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/attribute/${encodeURIComponent(selector)}=${encodeURIComponent(value)}`,
        method: 'GET',
    });
    return (response as unknown) as AttributeValueDTO;
}

export const ProductsGetById = async (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, stockLocationKey?: string }): Promise<ProductDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}`,
        method: 'GET',
        query: toQueryString(query),
    });
    return (response as unknown) as ProductDTO;
}

export const ProductsUpdateProduct = async (id: string, dto: ProductUpdateDTO): Promise<ProductDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ProductDTO;
}

export const ProductsDelete = async (id: string): Promise<ProductDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}`,
        method: 'DELETE',
    });
    return (response as unknown) as ProductDTO;
}

export const ProductsSetCustom = async (id: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/custom`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetAssets = async (id: string, dto: AssetDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/assets`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetStoreStatus = async (id: string, dto: StoreStatusDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/store-status`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetState = async (id: string, dto: TransitionProductStateDTO): Promise<ProductDTO> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/state`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as ProductDTO;
}

export const ProductsSetTaxCategory = async (id: string, dto: KeyReferenceDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/tax-category`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetReviewRating = async (id: string, dto: ReviewRatingStatisticsDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/review-rating`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetName = async (id: string, dto: LangValue[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/name`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetDescription = async (id: string, dto: LangValue[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/description`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetSlug = async (id: string, dto: LangValue[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/slug`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetMetaTitle = async (id: string, dto: LangValue[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/meta-title`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetMetaDescription = async (id: string, dto: LangValue[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/meta-description`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetMetaKeywords = async (id: string, dto: LangValue[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/meta-keywords`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetScore = async (id: string, dto: ProductScoreUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/score`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetOwner = async (id: string, dto: ProductOwnerUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/owner`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetBrands = async (id: string, dto: IdReferenceDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/brands`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetCategories = async (id: string, dto: IdReferenceDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/categories`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetCollections = async (id: string, dto: IdReferenceDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/collections`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetRelations = async (id: string, dto: ProductRelationsDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/relations`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetAttributes = async (id: string, dto: ProductAttributeDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/attributes`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetMasterVariantId = async (id: string, dto: ProductMasterVariantUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/master-variant`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsCreateContent = async (id: string, dto: ContentDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/content`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsUpdateContent = async (id: string, idx: number, dto: ContentDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/content/${encodeURIComponent(idx)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsDeleteContent = async (id: string, idx: number): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/content/${encodeURIComponent(idx)}`,
        method: 'DELETE',
    });
    
}

export const ProductsSetVariantSku = async (sku: string, dto: ProductSkuUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/variants/${encodeURIComponent(sku)}`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsDeleteVariant = async (sku: string): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/variants/${encodeURIComponent(sku)}`,
        method: 'DELETE',
    });
    
}

export const ProductsGetSKUImages = async (sku: string): Promise<ImageDTO[]> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/images`,
        method: 'GET',
    });
    return (response as unknown) as ImageDTO[];
}

export const ProductsUploadImages = async (sku: string, dto: any): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/images`,
        method: 'POST',
        body: dto,
        contentType: 'multipart/form-data',
    });
    
}

export const ProductsDeleteImage = async (sku: string, query: { indexes: string }): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/images`,
        method: 'DELETE',
        query: toQueryString(query),
    });
    
}

export const ProductsSetVariantImages = async (sku: string, dto: ImageDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/images`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSwapImageIndex = async (sku: string, dto: SwapIndexDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/images/swap`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsCreateVariant = async (id: string, dto: ProductVariantDraftDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/variants`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetVariantMasterBarcode = async (sku: string, dto: ProductBarcodeUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/master-barcode`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsAddVariantBarcode = async (sku: string, dto: ProductBarcodeUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/barcode`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsDeleteVariantBarcode = async (idx: number, sku: string): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/barcode/${encodeURIComponent(idx)}`,
        method: 'DELETE',
    });
    
}

export const ProductsSetVariantCollapseKey = async (sku: string, dto: ProductCollapseKeyUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/collapse-key`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetVariantCollapseMode = async (sku: string, dto: ProductCollapseModeUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/collapse-mode`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetVariantAttributes = async (sku: string, dto: ProductAttributeDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/variant-attributes`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsCreateVariantOffer = async (sku: string, dto: OfferDraftDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/sku=${encodeURIComponent(sku)}/offers`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetVariantOffers = async (sku: string, dto: OfferDraftDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/sku=${encodeURIComponent(sku)}/offers`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsUpdateVariantOffer = async (sku: string, offerId: string, dto: OfferDraftDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/sku=${encodeURIComponent(sku)}/offers/offerId=${encodeURIComponent(offerId)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsDeleteVariantOffer = async (sku: string, offerId: string): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/sku=${encodeURIComponent(sku)}/offers/offerId=${encodeURIComponent(offerId)}`,
        method: 'DELETE',
    });
    
}

export const ProductsSetVariantAliasImagesFrom = async (sku: string, dto: ProductAliasImagesFromUpdateDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/alias-images-from`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetVariantShippingData = async (sku: string, dto: ShippingDataDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/shipping-data`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetVariantOverrides = async (sku: string, dto: ProductVariantOverridesDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/overrides`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetVariantCustom = async (sku: string, dto: SetCustomFieldDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/sku=${encodeURIComponent(sku)}/variant-custom`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsAddVariantOptionDefinition = async (sku: string, dto: OptionDefinitionDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/options`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsUpdateVariantOptionDefinition = async (sku: string, index: number, dto: OptionDefinitionDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/options/${encodeURIComponent(index)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsDeleteVariantOptionDefinition = async (sku: string, index: number): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/options/${encodeURIComponent(index)}`,
        method: 'DELETE',
    });
    
}

export const ProductsAddVariantInventory = async (sku: string, dto: InventoryDraftDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/inventories`,
        method: 'POST',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsUpdateVariantInventories = async (sku: string, dto: string[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/inventories`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsUpdateVariantInventory = async (sku: string, stockLocationKey: string, dto: InventoryDraftDTO): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/inventories/${encodeURIComponent(stockLocationKey)}`,
        method: 'PUT',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsDeleteVariantInventory = async (sku: string, stockLocationKey: string): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/inventories/${encodeURIComponent(stockLocationKey)}`,
        method: 'DELETE',
    });
    
}

export const ProductsSetVariantLabels = async (sku: string, dto: ProductVariantLabelDTO[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(sku)}/labels`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

export const ProductsSetAddonData = async (id: string, dto: string[]): Promise<void> => {
    const response = await HttpClient.request({
        path: `/merchandise/products/${encodeURIComponent(id)}/addon-data`,
        method: 'PATCH',
        body: dto,
        contentType: 'application/json',
    });
    
}

