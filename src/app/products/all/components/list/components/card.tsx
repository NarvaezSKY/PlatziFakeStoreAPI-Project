import { Link } from 'react-router-dom'
import { IGetAllProductsRes } from '../../../../../../core/new-products/domain/get-all-products'

export const ProductCard = ({ product }: { product: IGetAllProductsRes }) => (
  <div className='w-70 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-md'>
    <div className='h-48 bg-gray-200 rounded-md'>
      <img
        className='h-full w-full object-cover rounded-xl'
        src={product.images[0]}
        alt={product.title}
      />
    </div>
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col'>
        <span className='text-md font-bold truncate'>
          {product.title.length > 25
            ? product.title.slice(0, 19) + '... '
            : product.title}
        </span>
      </div>

      <p className='font-bold text-red-600'>${product.price}</p>
      <Link to={`/products/${product.id}`}>
        <button className='hover:bg-primary text-gray-50 bg-secondary py-2 rounded-md'>
          See more
        </button>
      </Link>
    </div>
  </div>
)
