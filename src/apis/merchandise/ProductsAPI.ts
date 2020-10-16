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
import { InventoryUpdateDTO } from '../../models/InventoryUpdateDTO';
import { AssetDTO } from '../../models/AssetDTO';
import { SwapIndexDTO } from '../../models/SwapIndexDTO';

export class ProductsAPI extends BaseAPI {
   async bulkLink (dto: BulkLinkUpdateDTO): Promise<ProductDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/bulk/link`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO[];
   }

   async bulkUnlink (dto: BulkLinkUpdateDTO): Promise<ProductDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/bulk/unlink`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO[];
   }

   async bulkDelete (dto: BulkDeleteDTO): Promise<ProductDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/bulk/delete`,
           method: 'DELETE',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO[];
   }

   async bulkSetStatus (dto: BulkStatusChangeDTO): Promise<ProductDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/bulk/status`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO[];
   }

   async import (dto: ProductDraftDTO[]): Promise<ProductDraftDTO[]> {
       const response = await this._request({
           path: `/merchandise/products/import`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDraftDTO[];
   }

   async createVariantOffer (id: string, variantId: string, dto: OfferDraftDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/variants/${variantId}/offers`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async updateVariantOffer (id: string, variantId: string, dto: OfferUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/variants/${variantId}/offers`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async deleteVariantOfferByKey (id: string, variantId: string, priceListKey: string, merchantKey: string): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/${variantId}/offers/priceListKey=${priceListKey}/merchantKey=${merchantKey}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async setStatus (id: string, dto: ProductStatusUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/status`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async setWeight (id: string, dto: ProductWeightUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/weight`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async increaseQuantity (id: string, variantId: string, dto: InventoryUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/variants/${variantId}/inventory/quantity/increase`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async decreaseQuantity (id: string, variantId: string, dto: InventoryUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/variants/${variantId}/inventory/quantity/decrease`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async setQuantity (id: string, variantId: string, dto: InventoryUpdateDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/variants/${variantId}/inventory/quantity`,
           method: 'PATCH',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async createAsset (id: string, dto: AssetDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/assets`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async updateAssetByIndex (id: string, index: number, dto: AssetDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/assets/index=${index}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async deleteAssetByIndex (id: string, index: number): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/assets/index=${index}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async search (query: { expand: string, language: string, term: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/search`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async filter (query?: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as void;
   }

   async create (dto: ProductDraftDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products`,
           method: 'POST',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async getSlugs (lang: string): Promise<string[]> {
       const response = await this._request({
           path: `/merchandise/products/slugs/lang=${lang}`,
           method: 'GET',
           
           
           
        });
       return (response.json() as unknown) as string[];
   }

   async getById (id: string, query?: { expand?: string[], statuses?: string[] }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async update (id: string, dto: ProductDraftDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async delete (id: string): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async getBySlug (slug: string, lang: string, query?: { expand?: string[], statuses?: string[] }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/slug=${slug}/lang=${lang}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async getByExternalId (externalId: string, query?: { expand?: string[], statuses?: string[] }): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/externalId=${externalId}`,
           method: 'GET',
           query: this._stringifyQuery(query),
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async updateByExternalId (externalId: string, dto: ProductDraftDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/externalId=${externalId}`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async deleteByExternalId (externalId: string): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/externalId=${externalId}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async uploadImage (id: string, variantId: string): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${id}/variants/${variantId}/images/upload`,
           method: 'POST',
           
           
           
        });
       return (response.json() as unknown) as void;
   }

   async uploadImageById (id: string, variantId: string, imageId: string): Promise<void> {
       const response = await this._request({
           path: `/merchandise/products/${id}/variants/${variantId}/images/${imageId}`,
           method: 'PATCH',
           
           
           
        });
       return (response.json() as unknown) as void;
   }

   async swapImageIndex (id: string, variantId: string, dto: SwapIndexDTO): Promise<ProductDTO> {
       const response = await this._request({
           path: `/merchandise/products/${id}/variants/${variantId}/images/index/swap`,
           method: 'PUT',
           
           body: dto,
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async deleteImage (id: string, variantId: string, index: number): Promise<object> {
       const response = await this._request({
           path: `/merchandise/products/${id}/variants/${variantId}/images/${index}`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

   async deleteImages (id: string): Promise<object> {
       const response = await this._request({
           path: `/merchandise/products/${id}/images`,
           method: 'DELETE',
           
           
           
        });
       return (response.json() as unknown) as object;
   }

}
