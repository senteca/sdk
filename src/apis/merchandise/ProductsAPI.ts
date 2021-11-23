import { BaseAPI } from '../../runtime';
import { BulkLinkUpdateDTO, BulkDeleteDTO, BulkStatusChangeDTO, BulkStateChangeDTO, BulkCustomFieldUpdateDTO, BulkCustomFieldUpdateByFilterDTO, BulkAttributeUpdateDTO, BulkAttributeDeleteDTO, BulkOfferQuantityUpdateDTO, BulkLabelSetDTO, BulkLabelRemoveDTO, ProductOfferSetDTO, ProductDraftDTO, ProductDTO, ProductFilterResultDTO, ProductImportDraftDTO, FilterQueryDTO, ProductSearchResultDTO, AttributeValueDTO, ProductUpdateDTO, SetCustomFieldDTO, AssetDTO, StoreStatusDTO, TransitionProductStateDTO, KeyReferenceDTO, ReviewRatingStatisticsDTO, LangValue, ProductScoreUpdateDTO, ProductOwnerUpdateDTO, IdReferenceDTO, ProductRelationsDTO, ProductAttributeDTO, ProductMasterVariantUpdateDTO, ContentDTO, ProductSkuUpdateDTO, ImageDTO, SwapIndexDTO, ProductVariantDraftDTO, ProductBarcodeUpdateDTO, ProductCollapseKeyUpdateDTO, ProductCollapseModeUpdateDTO, ProductAttributeDraftDTO, OfferDraftDTO, ProductAliasImagesFromUpdateDTO, ShippingDataDTO, ProductVariantOverridesDTO, OptionDefinitionDTO, InventoryDraftDTO, ProductVariantLabelDTO } from '../../models';

export class ProductsAPI extends BaseAPI {
   async bulkLink (dto: BulkLinkUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/link`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkUnlink (dto: BulkLinkUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/unlink`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkDelete (dto: BulkDeleteDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/delete`,
           method: 'DELETE',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkSetStatus (dto: BulkStatusChangeDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/status`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkSetState (dto: BulkStateChangeDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/state`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkCustomFieldUpdate (dto: BulkCustomFieldUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/custom`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkCustomFieldUpdateByFilter (dto: BulkCustomFieldUpdateByFilterDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/custom-by-filter`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkAttributeSet (dto: BulkAttributeUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/attribute-set`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkAttributeDelete (dto: BulkAttributeDeleteDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/attribute-delete`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkOfferMinQuantity (dto: BulkOfferQuantityUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/offer-min-quantity`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkOfferMaxQuantity (dto: BulkOfferQuantityUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/offer-max-quantity`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkLabelSet (dto: BulkLabelSetDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/label-set`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkLabelDelete (dto: BulkLabelRemoveDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/label-remove`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async bulkSetOffers (dto: ProductOfferSetDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/offers`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async create (dto: ProductDraftDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ProductDTO;
   }

   async filter (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ProductFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/products`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ProductFilterResultDTO;
   }

   async createNoValidation (dto: ProductDraftDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/no-validation`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ProductDTO;
   }

   async import (dto: ProductImportDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/import`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async exportToCSV (dto: FilterQueryDTO): Promise<any> {
       const response = await this._request({
           path: `/merchandise/products/export/csv`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as any;
   }

   async search (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<ProductSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/products/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ProductSearchResultDTO;
   }

   async getBySlug (slug: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, stockLocationKey?: string }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/slug=${encodeURIComponent(slug)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ProductDTO;
   }

   async getByExternalId (externalId: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, stockLocationKey?: string }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/externalId=${encodeURIComponent(externalId)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ProductDTO;
   }

   async deleteByExternalId (externalId: string): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/externalId=${encodeURIComponent(externalId)}`,
           method: 'DELETE',
        });
       return (response as unknown) as ProductDTO;
   }

   async getAttributeLabel (selector: string, value: string): Promise<AttributeValueDTO> {
       const response = await this._request({
           path: `/merchandise/products/attribute/${encodeURIComponent(selector)}=${encodeURIComponent(value)}`,
           method: 'GET',
        });
       return (response as unknown) as AttributeValueDTO;
   }

   async getById (id: string, query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, merchantKey?: string, expand?: string, project?: string, stockLocationKey?: string }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
        });
       return (response as unknown) as ProductDTO;
   }

   async updateProduct (id: string, dto: ProductUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ProductDTO;
   }

   async delete (id: string): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}`,
           method: 'DELETE',
        });
       return (response as unknown) as ProductDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setAssets (id: string, dto: AssetDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/assets`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setStoreStatus (id: string, dto: StoreStatusDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/store-status`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setState (id: string, dto: TransitionProductStateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/state`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as ProductDTO;
   }

   async setTaxCategory (id: string, dto: KeyReferenceDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/tax-category`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setReviewRating (id: string, dto: ReviewRatingStatisticsDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/review-rating`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setName (id: string, dto: LangValue[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/name`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setDescription (id: string, dto: LangValue[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/description`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setSlug (id: string, dto: LangValue[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/slug`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setMetaTitle (id: string, dto: LangValue[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/meta-title`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setMetaDescription (id: string, dto: LangValue[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/meta-description`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setMetaKeywords (id: string, dto: LangValue[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/meta-keywords`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setScore (id: string, dto: ProductScoreUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/score`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setOwner (id: string, dto: ProductOwnerUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/owner`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setBrands (id: string, dto: IdReferenceDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/brands`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setCategories (id: string, dto: IdReferenceDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/categories`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setCollections (id: string, dto: IdReferenceDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/collections`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setRelations (id: string, dto: ProductRelationsDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/relations`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setAttributes (id: string, dto: ProductAttributeDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/attributes`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setMasterVariantId (id: string, dto: ProductMasterVariantUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/master-variant`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async createContent (id: string, dto: ContentDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/content`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async updateContent (id: string, idx: number, dto: ContentDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/content/${encodeURIComponent(idx)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async deleteContent (id: string, idx: number): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/content/${encodeURIComponent(idx)}`,
           method: 'DELETE',
        });
       
   }

   async setVariantSku (sku: string, dto: ProductSkuUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/variants/${encodeURIComponent(sku)}`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async deleteVariant (sku: string): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/variants/${encodeURIComponent(sku)}`,
           method: 'DELETE',
        });
       
   }

   async getSKUImages (sku: string): Promise<ImageDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/images`,
           method: 'GET',
        });
       return (response as unknown) as ImageDTO[];
   }

   async uploadImages (sku: string, dto: any): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/images`,
           method: 'POST',
           body: dto,
           contentType: 'multipart/form-data',
        });
       
   }

   async deleteImage (sku: string, query: { indexes: string }): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/images`,
           method: 'DELETE',
           query: this._stringifyQuery(query),
        });
       
   }

   async setVariantImages (sku: string, dto: ImageDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/images`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async swapImageIndex (sku: string, dto: SwapIndexDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/images/swap`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async createVariant (id: string, dto: ProductVariantDraftDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/variants`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setVariantMasterBarcode (sku: string, dto: ProductBarcodeUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/master-barcode`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async addVariantBarcode (sku: string, dto: ProductBarcodeUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/barcode`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async deleteVariantBarcode (idx: number, sku: string): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/barcode/${encodeURIComponent(idx)}`,
           method: 'DELETE',
        });
       
   }

   async setVariantCollapseKey (sku: string, dto: ProductCollapseKeyUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/collapse-key`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setVariantCollapseMode (sku: string, dto: ProductCollapseModeUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/collapse-mode`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setVariantAttributes (sku: string, dto: ProductAttributeDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/variant-attributes`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async createVariantOffer (sku: string, dto: OfferDraftDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/sku=${encodeURIComponent(sku)}/offers`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setVariantOffers (sku: string, dto: OfferDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/sku=${encodeURIComponent(sku)}/offers`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async updateVariantOffer (sku: string, offerId: string, dto: OfferDraftDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/sku=${encodeURIComponent(sku)}/offers/offerId=${encodeURIComponent(offerId)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async deleteVariantOffer (sku: string, offerId: string): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/sku=${encodeURIComponent(sku)}/offers/offerId=${encodeURIComponent(offerId)}`,
           method: 'DELETE',
        });
       
   }

   async setVariantAliasImagesFrom (sku: string, dto: ProductAliasImagesFromUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/alias-images-from`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setVariantShippingData (sku: string, dto: ShippingDataDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/shipping-data`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setVariantOverrides (sku: string, dto: ProductVariantOverridesDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/overrides`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setVariantCustom (sku: string, dto: SetCustomFieldDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/sku=${encodeURIComponent(sku)}/variant-custom`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async addVariantOptionDefinition (sku: string, dto: OptionDefinitionDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/options`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async updateVariantOptionDefinition (sku: string, index: number, dto: OptionDefinitionDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/options/${encodeURIComponent(index)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async deleteVariantOptionDefinition (sku: string, index: number): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/options/${encodeURIComponent(index)}`,
           method: 'DELETE',
        });
       
   }

   async addVariantInventory (sku: string, dto: InventoryDraftDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/inventories`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async updateVariantInventories (sku: string, dto: InventoryDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/inventories`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async updateVariantInventory (sku: string, stockLocationKey: string, dto: InventoryDraftDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/inventories/${encodeURIComponent(stockLocationKey)}`,
           method: 'PUT',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async deleteVariantInventory (sku: string, stockLocationKey: string): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/inventories/${encodeURIComponent(stockLocationKey)}`,
           method: 'DELETE',
        });
       
   }

   async setVariantLabels (sku: string, dto: ProductVariantLabelDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/labels`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

   async setAddonData (id: string, dto: string[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/addon-data`,
           method: 'PATCH',
           body: dto,
           contentType: 'application/json',
        });
       
   }

}
