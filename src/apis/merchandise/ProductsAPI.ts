import { BaseAPI } from '../../runtime';
import { BulkLinkUpdateDTO } from '../../models/BulkLinkUpdateDTO';
import { BulkDeleteDTO } from '../../models/BulkDeleteDTO';
import { BulkStatusChangeDTO } from '../../models/BulkStatusChangeDTO';
import { ProductDraftDTO } from '../../models/ProductDraftDTO';
import { OfferDraftDTO } from '../../models/OfferDraftDTO';
import { ProductDTO } from '../../models/ProductDTO';
import { OfferUpdateDTO } from '../../models/OfferUpdateDTO';
import { ProductStatusUpdateDTO } from '../../models/ProductStatusUpdateDTO';
import { ProductWeightUpdateDTO } from '../../models/ProductWeightUpdateDTO';
import { InventoryUpdateDTO } from '../../models/InventoryUpdateDTO';
import { AssetDTO } from '../../models/AssetDTO';

export class ProductsAPI extends BaseAPI {
   async linkProducts (dto: BulkLinkUpdateDTO): Promise<object> {
       const response = await this.request({
           path: `/merchandise/products/bulk/link`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as object;
   }

   async unlinkProducts (dto: BulkLinkUpdateDTO): Promise<object> {
       const response = await this.request({
           path: `/merchandise/products/bulk/unlink`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as object;
   }

   async deleteProducts (dto: BulkDeleteDTO): Promise<object> {
       const response = await this.request({
           path: `/merchandise/products/bulk/delete`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as object;
   }

   async changeProductsStatus (dto: BulkStatusChangeDTO): Promise<object> {
       const response = await this.request({
           path: `/merchandise/products/bulk/status`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as object;
   }

   async importProducts (dto: ProductDraftDTO[]): Promise<ProductDraftDTO[]> {
       const response = await this.request({
           path: `/merchandise/products/import`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDraftDTO[];
   }

   async addProductOffer (productId: string, variantId: string, dto: OfferDraftDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/${variantId}/offers`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async updateProductOffer (productId: string, variantId: string, dto: OfferUpdateDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/${variantId}/offers`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async removeProductOffer (productId: string, variantId: string, priceListKey: string, merchantKey: string): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/${variantId}/offers/${priceListKey}/${merchantKey}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async setProductStatus (productId: string, dto: ProductStatusUpdateDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/status`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async setProductWeight (productId: string, dto: ProductWeightUpdateDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/weight`,
           method: 'PATCH',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async addProductQuantity (productId: string, variantId: string, dto: InventoryUpdateDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/${variantId}/inventory/add-quantity`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async removeProductQuantity (productId: string, variantId: string, dto: InventoryUpdateDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/${variantId}/inventory/remove-quantity`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async changeProductQuantity (productId: string, variantId: string, dto: InventoryUpdateDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/${variantId}/inventory/change-quantity`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async addProductAsset (productId: string, dto: AssetDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/assets`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async updateProductAsset (productId: string, assetIndex: number, dto: AssetDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/assets/${assetIndex}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async removeProductAsset (productId: string, assetIndex: number): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/assets/${assetIndex}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async searchProducts (query: { expand: string, language: string, term: string, limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/products/search`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async filterProducts (query: { filter?: string[], sort?: string[], expand?: string[], project?: string[], limit?: number, offset?: number }): Promise<void> {
       const response = await this.request({
           path: `/merchandise/products`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as void;
   }

   async createProduct (dto: ProductDraftDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products`,
           method: 'POST',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async getAllProductSlugs (languageCode: string): Promise<string[]> {
       const response = await this.request({
           path: `/merchandise/products/slugs/${languageCode}`,
           method: 'GET',
           
           
        });
       return (response.json() as unknown) as string[];
   }

   async findProductById (id: string, query: { expand: string[], statuses?: string[] }): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${id}`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async updateProductById (id: string, dto: ProductDraftDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async deleteProductById (id: string): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async findProductBySlug (language: string, slug: string, query: { expand: string[], statuses?: string[] }): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/slug/${language}/${slug}`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async findProductByExternalId (externalId: string, query: { expand: string[], statuses?: string[] }): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/externalId/${externalId}`,
           method: 'GET',
           query: this.stringifyQuery(query),
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async updateProductByExternalId (id: string, dto: ProductDraftDTO): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/externalId/${id}`,
           method: 'PUT',
           
           body: dto,
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async deleteProductByExternalId (id: string): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/externalId/${id}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async uploadProductImage (productId: string, variantId: string): Promise<void> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/${variantId}/images`,
           method: 'POST',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async uploadProductImageById (productId: string, variantId: string, imageId: string): Promise<void> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/${variantId}/images/${imageId}`,
           method: 'PATCH',
           
           
        });
       return (response.json() as unknown) as void;
   }

   async changeProductImageIndex (productId: string, variantId: string, imageIndex: number, destinationIndex: number): Promise<ProductDTO> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/${variantId}/images/${imageIndex}/${destinationIndex}`,
           method: 'PUT',
           
           
        });
       return (response.json() as unknown) as ProductDTO;
   }

   async removeProductImage (productId: string, variantId: string, imageIndex: number): Promise<object> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/${variantId}/images/${imageIndex}`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as object;
   }

   async removeProductImages (productId: string): Promise<object> {
       const response = await this.request({
           path: `/merchandise/products/${productId}/images`,
           method: 'DELETE',
           
           
        });
       return (response.json() as unknown) as object;
   }

}
