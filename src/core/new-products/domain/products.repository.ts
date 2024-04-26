import { IGetAllProductsReq, IGetAllProductsRes } from './get-all-products'
import { IGetSingleProductResponse } from './get-product-by-id'
import { ICreateProductReq, ICreateProductRes } from './create-product'
import { IDeleteProductRes } from './delete-products'
import { IUpdateProductReq } from './update-products/update-product.req'

export interface IProductsRepository {
  getAllProducts(body: IGetAllProductsReq): Promise<IGetAllProductsRes[]>
  getSingleProduct(id: number): Promise<IGetSingleProductResponse>
  createProduct(productData: ICreateProductReq): Promise<ICreateProductRes>
  updateProduct(
    id: number,
    productData: IUpdateProductReq
  ): Promise<IUpdateProductReq>
  deleteProduct(id: number): Promise<IDeleteProductRes>
}
