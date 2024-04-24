import { IGetAllProductsReq, IGetAllProductsRes } from './get-all-products'



export interface IProductsRepository {
  getAllProducts(body: IGetAllProductsReq): Promise<IGetAllProductsRes[]>
}
