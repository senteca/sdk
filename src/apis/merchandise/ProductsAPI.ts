import { BaseAPI } from '../../runtime';
import { BulkLinkUpdateDTO } from '../../models/BulkLinkUpdateDTO';
import { BulkDeleteDTO } from '../../models/BulkDeleteDTO';
import { BulkStatusChangeDTO } from '../../models/BulkStatusChangeDTO';
import { BulkCustomFieldUpdateDTO } from '../../models/BulkCustomFieldUpdateDTO';
import { BulkAttributeUpdateDTO } from '../../models/BulkAttributeUpdateDTO';
import { BulkAttributeDeleteDTO } from '../../models/BulkAttributeDeleteDTO';
import { ProductDraftDTO } from '../../models/ProductDraftDTO';
import { ProductDTO } from '../../models/ProductDTO';
import { ProductFilterResultDTO } from '../../models/ProductFilterResultDTO';
import { ProductImportDraftDTO } from '../../models/ProductImportDraftDTO';
import { ProductSearchResultDTO } from '../../models/ProductSearchResultDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';
import { AssetDTO } from '../../models/AssetDTO';
import { StoreStatusDTO } from '../../models/StoreStatusDTO';
import { KeyReferenceDTO } from '../../models/KeyReferenceDTO';
import { LangValue } from '../../models/LangValue';
import { ProductScoreUpdateDTO } from '../../models/ProductScoreUpdateDTO';
import { IdReferenceDTO } from '../../models/IdReferenceDTO';
import { ProductMasterVariantUpdateDTO } from '../../models/ProductMasterVariantUpdateDTO';
import { ContentDTO } from '../../models/ContentDTO';
import { ImageDTO } from '../../models/ImageDTO';
import { SwapIndexDTO } from '../../models/SwapIndexDTO';
import { ProductVariantDraftDTO } from '../../models/ProductVariantDraftDTO';
import { ProductSkuUpdateDTO } from '../../models/ProductSkuUpdateDTO';
import { ProductBarcodeUpdateDTO } from '../../models/ProductBarcodeUpdateDTO';
import { ProductCollapseKeyUpdateDTO } from '../../models/ProductCollapseKeyUpdateDTO';
import { ProductCollapseModeUpdateDTO } from '../../models/ProductCollapseModeUpdateDTO';
import { OfferDTO } from '../../models/OfferDTO';
import { ProductAliasImagesFromUpdateDTO } from '../../models/ProductAliasImagesFromUpdateDTO';
import { ShippingDataDTO } from '../../models/ShippingDataDTO';

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

   async bulkCustomFieldUpdate (dto: BulkCustomFieldUpdateDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/bulk/custom`,
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

   async create (dto: ProductDraftDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async filter (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<ProductFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/products`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ProductFilterResultDTO;
   }

   async import (dto: ProductImportDraftDTO[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async search (query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, sort?: string, limit?: number, offset?: number, language?: string, term?: string, phrase?: string }): Promise<ProductSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/products/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ProductSearchResultDTO;
   }

   async getBySlug (slug: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, stockLocationKey?: string }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/slug=${encodeURIComponent(slug)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async getByExternalId (externalId: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, stockLocationKey?: string }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/externalId=${encodeURIComponent(externalId)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async deleteByExternalId (externalId: string): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/externalId=${encodeURIComponent(externalId)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async getById (id: string, query?: { storeKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, stockLocationKey?: string }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async delete (id: string): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async recalculateInventories (id: string): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/recalculate-inventories`,
           method: 'PATCH',
           
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
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

   async setTaxCategory (id: string, dto: KeyReferenceDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/tax-category`,
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

   async setAttributes (id: string, dto: string[]): Promise<void> {
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

   async getSKUImages (sku: string): Promise<ImageDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/images`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as ImageDTO[];
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

   async setVariantImages (sku: string, dto: string[]): Promise<void> {
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

   async deleteVariant (sku: string): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/variants/${encodeURIComponent(sku)}`,
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

   async setVariantAttributes (sku: string, dto: string[]): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/variant-attributes`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async createVariantOffer (sku: string, dto: OfferDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(sku)}/offers`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async updateVariantOffer (id: string, dto: OfferDTO): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/offers/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       
   }

   async deleteVariantOffer (id: string): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/offers/${encodeURIComponent(id)}`,
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

}
