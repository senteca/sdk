import { BaseAPI } from '../../runtime';
import { BulkLinkUpdateDTO } from '../../models/BulkLinkUpdateDTO';
import { ProductDTO } from '../../models/ProductDTO';
import { BulkDeleteDTO } from '../../models/BulkDeleteDTO';
import { BulkStatusChangeDTO } from '../../models/BulkStatusChangeDTO';
import { ProductDraftDTO } from '../../models/ProductDraftDTO';
import { OfferDraftDTO } from '../../models/OfferDraftDTO';
import { OfferUpdateDTO } from '../../models/OfferUpdateDTO';
import { ProductStatusUpdateDTO } from '../../models/ProductStatusUpdateDTO';
import { ProductWeightUpdateDTO } from '../../models/ProductWeightUpdateDTO';
import { SetCustomFieldDTO } from '../../models/SetCustomFieldDTO';
import { InventoryUpdateDTO } from '../../models/InventoryUpdateDTO';
import { AssetDTO } from '../../models/AssetDTO';
import { ProductSearchResultDTO } from '../../models/ProductSearchResultDTO';
import { ProductFilterResultDTO } from '../../models/ProductFilterResultDTO';
import { SwapIndexDTO } from '../../models/SwapIndexDTO';

export class ProductsAPI extends BaseAPI {
   async bulkLink (dto: BulkLinkUpdateDTO): Promise<ProductDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/bulk/link`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO[];
   }

   async bulkUnlink (dto: BulkLinkUpdateDTO): Promise<ProductDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/bulk/unlink`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO[];
   }

   async bulkDelete (dto: BulkDeleteDTO): Promise<ProductDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/bulk/delete`,
           method: 'DELETE',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO[];
   }

   async bulkSetStatus (dto: BulkStatusChangeDTO): Promise<ProductDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/bulk/status`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO[];
   }

   async import (dto: ProductDraftDTO[]): Promise<ProductDraftDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/import`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDraftDTO[];
   }

   async createVariantOffer (id: string, variantId: string, dto: OfferDraftDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/variants/${encodeURIComponent(variantId)}/offers`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async updateVariantOffer (id: string, variantId: string, dto: OfferUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/variants/${encodeURIComponent(variantId)}/offers`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async deleteVariantOfferByKey (id: string, variantId: string, priceListKey: string, merchantKey: string): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/${encodeURIComponent(variantId)}/offers/priceListKey=${encodeURIComponent(priceListKey)}/merchantKey=${encodeURIComponent(merchantKey)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async setStatus (id: string, dto: ProductStatusUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/status`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async setWeight (id: string, dto: ProductWeightUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/weight`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async setCustom (id: string, dto: SetCustomFieldDTO[]): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/custom`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async increaseQuantity (id: string, variantId: string, dto: InventoryUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/variants/${encodeURIComponent(variantId)}/inventory/quantity/increase`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async decreaseQuantity (id: string, variantId: string, dto: InventoryUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/variants/${encodeURIComponent(variantId)}/inventory/quantity/decrease`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async setQuantity (id: string, variantId: string, dto: InventoryUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/variants/${encodeURIComponent(variantId)}/inventory/quantity`,
           method: 'PATCH',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async createAsset (id: string, dto: AssetDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/assets`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async updateAssetByIndex (id: string, index: number, dto: AssetDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/assets/index=${encodeURIComponent(index)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async deleteAssetByIndex (id: string, index: number): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/assets/index=${encodeURIComponent(index)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async search (query: { language: string, term: string, expand?: string, limit?: number, offset?: number }): Promise<ProductSearchResultDTO> {
       const response = await this._request({
           path: `/merchandise/products/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ProductSearchResultDTO;
   }

   async filter (query?: { filter?: string, sort?: string, expand?: string, project?: string, limit?: number, offset?: number }): Promise<ProductFilterResultDTO> {
       const response = await this._request({
           path: `/merchandise/products`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ProductFilterResultDTO;
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

   async getSlugs (lang: string): Promise<string[]> {
       const response = await this._request({
           path: `/merchandise/products/slugs/lang=${encodeURIComponent(lang)}`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as string[];
   }

   async getByExternalId (externalId: string, query?: { statuses?: string[], expand?: string }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/externalId=${encodeURIComponent(externalId)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async updateByExternalId (externalId: string, dto: ProductDraftDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/externalId=${encodeURIComponent(externalId)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
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

   async getById (id: string, query?: { statuses?: string[], expand?: string }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async update (id: string, dto: ProductDraftDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
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

   async getBySlug (slug: string, lang: string, query?: { statuses?: string[], expand?: string }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/slug=${encodeURIComponent(slug)}/lang=${encodeURIComponent(lang)}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async uploadImage (id: string, variantId: string, dto: any): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/variants/${encodeURIComponent(variantId)}/images/upload`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'multipart/form-data',
        });
       
   }

   async uploadImageById (id: string, variantId: string, imageId: string): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/variants/${encodeURIComponent(variantId)}/images/${encodeURIComponent(imageId)}`,
           method: 'PATCH',
           
           
           
           
        });
       
   }

   async swapImageIndex (id: string, variantId: string, dto: SwapIndexDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/variants/${encodeURIComponent(variantId)}/images/index/swap`,
           method: 'PUT',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async deleteImage (id: string, variantId: string, index: number): Promise<any> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/variants/${encodeURIComponent(variantId)}/images/${encodeURIComponent(index)}`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as any;
   }

   async deleteImages (id: string): Promise<any> {
       const response = await this._request({
           path: `/merchandise/products/${encodeURIComponent(id)}/images`,
           method: 'DELETE',
           
           
           
           
        });
       return (response.json() as unknown) as any;
   }

}
